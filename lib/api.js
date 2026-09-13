// Central place for every call to the Node/MySQL backend.
// Every component in the project should import from here instead of
// calling fetch("http://...") directly — one file to update if a route,
// field name, or the host itself ever changes.



const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000/api";

// Shared safe-fetch wrapper: never throws, always logs, returns null on
// any failure so callers can just check the result.
async function safeFetchJson(url, options) {
    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            console.error(`API error ${res.status} on ${url}`);
            return null;
        }
        return await res.json();
    } catch (error) {
        console.error(`API request failed: ${url}`, error);
        return null;
    }
}

// Cache/revalidate options only matter on the server (Next.js reads them
// during rendering); the browser ignores unknown fetch options harmlessly,
// so this same function works from both server and client components.
const CACHE_OPTS = { next: { revalidate: 3600 } };

export async function getServices() {
    const result = await safeFetchJson(`${API_BASE_URL}/consumerservices/getallservices`, CACHE_OPTS);
    return result?.success ? result.data : [];
}

export async function getServiceBySlug(slug) {
    const services = await getServices();
    return services.find((s) => s.slug === slug) || null;
}

// Raw common-issue rows ({ id, name, ... }) — callers pick what they need:
// the detail page wants just names, LeadForm wants id + name for a <select>.
export async function getCommonIssues(serviceId) {
    const result = await safeFetchJson(
        `${API_BASE_URL}/consumerservices/commonissues/${serviceId}`,
        CACHE_OPTS,
    );
    return result?.success ? result.data : [];
}

// De-dupes rows with the same `name` (current API returns some duplicate
// seed rows per service — see the backend note), keeping the most recent.
function dedupeByName(rows) {
    const latestByName = new Map();
    for (const row of rows) {
        const existing = latestByName.get(row.name);
        if (!existing || new Date(row.created_at) > new Date(existing.created_at)) {
            latestByName.set(row.name, row);
        }
    }
    return Array.from(latestByName.values());
}

// Raw, de-duplicated service-type rows — used directly by LeadForm's
// dropdown, and reused by getPriceList() below for the detail page.
export async function getServiceTypes(serviceId) {
    const result = await safeFetchJson(
        `${API_BASE_URL}/consumerservices/servicetypes/${serviceId}`,
        CACHE_OPTS,
    );
    if (!result?.success) return [];
    return dedupeByName(result.data);
}

// Price list formatted for display on the service detail page:
// [{ item, price }]. Some rows have price "0.00" with the real price
// stashed in `description` — handled here in one place.
export async function getPriceList(serviceId) {
    const rows = await getServiceTypes(serviceId);
    return rows.map((row) => {
        const numericPrice = Number(row.price);
        const price = numericPrice > 0 ? `₹${numericPrice}` : `₹${row.description}`;
        return { item: row.name, price };
    });
}

export async function submitBooking(payload) {
    const res = await fetch(`${API_BASE_URL}/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => ({}));

    if (!res.ok || body.success === false) {
        throw new Error(body.message || "We could not submit your booking.");
    }
    return body;
}