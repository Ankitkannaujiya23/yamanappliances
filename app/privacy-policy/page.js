import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/data/site";

export const metadata = {
    title: `Privacy Policy | ${site.name}`,
    description: `Read how ${site.name} collects, uses, and protects the information you share when booking an appliance repair service.`,
    alternates: { canonical: "/privacy-policy" },
};

// Kept in plain English, close to what LeadForm.js actually collects and
// sends to the booking API — see components/LeadForm.js for the exact
// fields (customer_name, email, mobile, address, city, state, pincode,
// service_id, service_type_id, issue_id, preferred_date/time, remarks).
export default function PrivacyPolicyPage() {
    const lastUpdated = "September 20, 2026";

    return (
        <>
            <div className="border-b border-slate-100 bg-brand-950">
                <div className="container-x flex items-center gap-1.5 py-3 text-xs text-brand-300">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-white">Privacy Policy</span>
                </div>
                <div className="container-x py-12 text-center sm:py-14">
                    <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-2 text-sm text-brand-200">Last updated: {lastUpdated}</p>
                </div>
            </div>

            <div className="container-x py-14">
                <div className="prose prose-slate mx-auto max-w-3xl">
                    <p className="text-[15px] leading-relaxed text-slate-600">
                        This Privacy Policy explains what information {site.name} (&quot;we&quot;,
                        &quot;us&quot;, &quot;our&quot;) collects when you use this website to book an
                        appliance repair service, and how that information is used.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Information We Collect
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        When you submit a booking request through our website, we collect
                        the details you provide in the booking form, including:
                    </p>
                    <ul className="mb-5 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-600">
                        <li>Your name and mobile number</li>
                        <li>Your email address (if provided)</li>
                        <li>Your service address, city, state, and pincode</li>
                        <li>The appliance, service type, and issue you select</li>
                        <li>Your preferred date and time for the visit (if provided)</li>
                        <li>Any additional remarks you choose to add</li>
                    </ul>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        We do not ask for or store payment card details, government ID
                        numbers, or any other sensitive identity information through this
                        website.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        How We Use Your Information
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        The information you submit is used to:
                    </p>
                    <ul className="mb-5 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-600">
                        <li>Process and confirm your appliance repair booking</li>
                        <li>Contact you regarding your service request, including by phone, WhatsApp, or email</li>
                        <li>Assign a technician and coordinate the service visit</li>
                        <li>Improve our services and customer support</li>
                    </ul>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        We do not sell your personal information to third parties. Your
                        details are shared only with the technician or team assigned to
                        fulfil your booking.
                    </p>

                    {/* <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Cookies and Analytics
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        This website may use basic cookies or analytics tools to
                        understand how visitors use the site and to improve performance.
                        These tools do not collect sensitive personal information.
                    </p> */}

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Data Retention
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        We retain your booking information for as long as necessary to
                        fulfil your service request and for reasonable record-keeping
                        afterward. You may contact us at any time to request that your
                        information be updated or deleted.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Your Choices
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        You may choose not to provide certain optional information (such
                        as email or remarks) when booking. However, some fields are
                        required to process your service request.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Changes to This Policy
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        We may update this Privacy Policy from time to time. Any changes
                        will be posted on this page with a revised &quot;Last updated&quot; date.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Contact Us
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        If you have any questions about this Privacy Policy or how your
                        information is handled, please contact us at{" "}
                        <a href={`mailto:${site.email}`} className="font-semibold text-brand-700">
                            {site.email}
                        </a>{" "}
                        or{" "}
                        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-semibold text-brand-700">
                            {site.phoneDisplay}
                        </a>.
                    </p>
                </div>
            </div>
        </>
    );
}