// "use client";

// import { useMemo, useState } from "react";
// import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
// import { services } from "@/data/services";

// const BOOKING_API_URL = "http://localhost:5000/api/booking";

// // Keep these values in sync with the IDs configured in the booking backend.
// const serviceOptions = services.map((service, index) => ({
//   id: index + 1,
//   name: service.name,
//   issues: service.commonIssues,
// }));


// const serviceTypeOptions = [
//   { id: 1, name: "Repair" },
//   { id: 2, name: "General Service" },
//   { id: 3, name: "Installation" },
// ];

// const timeOptions = ["09:00", "11:00", "13:00", "15:00", "17:00"];
// const fullNamePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/;
// const locationPattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const mobilePattern = /^[6-9]\d{9}$/;
// const pincodePattern = /^\d{6}$/;

// const initialForm = {
//   customerName: "",
//   email: "",
//   mobile: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
//   serviceId: "",
//   serviceTypeId: "",
//   issueId: "",
//   preferredDate: "",
//   preferredTime: "",
//   remarks: "",
// };

// function getLocalDate() {
//   const today = new Date();
//   const offset = today.getTimezoneOffset() * 60000;
//   return new Date(today.getTime() - offset).toISOString().split("T")[0];
// }

// export default function LeadForm({ presetService = "", compact = false }) {
//   const presetServiceId = useMemo(
//     () => String(serviceOptions.find((service) => service.name === presetService)?.id || ""),
//     [presetService],
//   );
//   const [form, setForm] = useState({
//     ...initialForm,
//     serviceId: presetServiceId,
//   });
//   const [status, setStatus] = useState("idle");
//   const [errors, setErrors] = useState({});
//   const [submitError, setSubmitError] = useState("");

//   const selectedService = serviceOptions.find(
//     (service) => String(service.id) === form.serviceId,
//   );

//   function handleChange(event) {
//     const { name, value } = event.target;
//     let nextValue = value;

//     if (name === "mobile") nextValue = value.replace(/\D/g, "").slice(0, 10);
//     if (name === "pincode") nextValue = value.replace(/\D/g, "").slice(0, 6);

//     setForm((current) => ({
//       ...current,
//       [name]: nextValue,
//       ...(name === "serviceId" ? { issueId: "" } : {}),
//     }));
//     setErrors((current) => ({ ...current, [name]: "" }));
//     setSubmitError("");
//   }

//   function validate() {
//     const nextErrors = {};
//     const name = form.customerName.trim();
//     const city = form.city.trim();
//     const state = form.state.trim();

//     if (!name) nextErrors.customerName = "Full name is required";
//     else if (!fullNamePattern.test(name)) {
//       nextErrors.customerName = "Use at least two names with letters and spaces only";
//     }

//     if (form.email.trim() && !emailPattern.test(form.email.trim())) {
//       nextErrors.email = "Enter a valid email address";
//     }
//     if (!mobilePattern.test(form.mobile)) {
//       nextErrors.mobile = "Enter a 10-digit mobile number starting with 6, 7, 8, or 9";
//     }
//     if (form.address.trim().length < 5) {
//       nextErrors.address = "Enter a complete address";
//     }
//     if (!locationPattern.test(city)) {
//       nextErrors.city = "Enter a valid city using letters and spaces only";
//     }
//     if (!locationPattern.test(state)) {
//       nextErrors.state = "Enter a valid state using letters and spaces only";
//     }
//     if (!pincodePattern.test(form.pincode)) {
//       nextErrors.pincode = "Enter a valid 6-digit pincode";
//     }
//     if (!form.serviceId) nextErrors.serviceId = "Please select an appliance";
//     if (!form.serviceTypeId) {
//       nextErrors.serviceTypeId = "Please select a service type";
//     }
//     if (!form.issueId) nextErrors.issueId = "Please select the issue";
//     if (form.preferredDate && form.preferredDate < getLocalDate()) {
//       nextErrors.preferredDate = "Preferred date cannot be in the past";
//     }
//     if (form.remarks.trim().length > 500) {
//       nextErrors.remarks = "Remarks cannot exceed 500 characters";
//     }

//     return nextErrors;
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const nextErrors = validate();
//     setErrors(nextErrors);
//     if (Object.keys(nextErrors).length > 0) return;

//     setStatus("submitting");
//     setSubmitError("");

//     const payload = {
//       customer_name: form.customerName.trim(),
//       email: form.email.trim().toLowerCase(),
//       mobile: form.mobile,
//       address: form.address.trim(),
//       city: form.city.trim(),
//       state: form.state.trim(),
//       pincode: form.pincode,
//       service_id: Number(form.serviceId),
//       service_type_id: Number(form.serviceTypeId),
//       issue_id: Number(form.issueId),
//       preferred_date: form.preferredDate || "",
//       preferred_time: form.preferredTime || "",
//       remarks: form.remarks.trim(),
//     };

//     try {
//       const response = await fetch(BOOKING_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const responseBody = await response.json().catch(() => ({}));

//       if (!response.ok || responseBody.success === false) {
//         throw new Error(responseBody.message || "We could not submit your booking.");
//       }

//       setStatus("success");
//       setForm({ ...initialForm, serviceId: presetServiceId });
//     } catch (error) {
//       setStatus("error");
//       setSubmitError(
//         error instanceof Error
//           ? error.message
//           : "We could not submit your booking. Please try again.",
//       );
//     }
//   }

//   if (status === "success") {
//     return (
//       <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 p-10 text-center">
//         <CheckCircle2 className="text-emerald-500" size={40} />
//         <h3 className="mt-4 text-lg font-bold text-emerald-800">
//           Thank You for Your Booking!
//         </h3>
//         <p className="mt-2 max-w-sm text-sm text-emerald-700">
//           Your request has been received. Our team will call you shortly to
//           confirm your appointment.
//         </p>
//         <button onClick={() => setStatus("idle")} className="btn-outline mt-6">
//           Book Another Service
//         </button>
//       </div>
//     );
//   }

//   const fieldClass = (field) =>
//     `input-field ${errors[field] ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""}`;

//   return (
//     <form onSubmit={handleSubmit} noValidate className="space-y-4">
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <Field label="Full Name" error={errors.customerName}>
//           <input type="text" name="customerName" value={form.customerName} onChange={handleChange} placeholder="Your full name" autoComplete="name" className={fieldClass("customerName")} aria-invalid={Boolean(errors.customerName)} />
//         </Field>
//         <Field label="Mobile Number" error={errors.mobile}>
//           <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit mobile number" autoComplete="tel" inputMode="numeric" className={fieldClass("mobile")} aria-invalid={Boolean(errors.mobile)} />
//         </Field>
//       </div>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <Field label="Email Address" optional error={errors.email}>
//           <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" className={fieldClass("email")} aria-invalid={Boolean(errors.email)} />
//         </Field>
//         <Field label="Pincode" error={errors.pincode}>
//           <input type="text" name="pincode" value={form.pincode} onChange={handleChange} placeholder="6-digit pincode" autoComplete="postal-code" inputMode="numeric" className={fieldClass("pincode")} aria-invalid={Boolean(errors.pincode)} />
//         </Field>
//       </div>

//       <Field label="Full Address" error={errors.address}>
//         <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="House no, street, locality" autoComplete="street-address" className={fieldClass("address")} aria-invalid={Boolean(errors.address)} />
//       </Field>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <Field label="City" error={errors.city}>
//           <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="e.g. Noida" autoComplete="address-level2" className={fieldClass("city")} aria-invalid={Boolean(errors.city)} />
//         </Field>
//         <Field label="State" error={errors.state}>
//           <input type="text" name="state" value={form.state} onChange={handleChange} placeholder="e.g. Uttar Pradesh" autoComplete="address-level1" className={fieldClass("state")} aria-invalid={Boolean(errors.state)} />
//         </Field>
//       </div>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <Field label="Appliance" error={errors.serviceId}>
//           <select name="serviceId" value={form.serviceId} onChange={handleChange} className={fieldClass("serviceId")} aria-invalid={Boolean(errors.serviceId)}>
//             <option value="">Select an appliance</option>
//             {serviceOptions.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
//           </select>
//         </Field>
//         <Field label="Service Type" error={errors.serviceTypeId}>
//           <select name="serviceTypeId" value={form.serviceTypeId} onChange={handleChange} className={fieldClass("serviceTypeId")} aria-invalid={Boolean(errors.serviceTypeId)}>
//             <option value="">Select a service type</option>
//             {serviceTypeOptions.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)}
//           </select>
//         </Field>
//       </div>

//       <Field label="Issue" error={errors.issueId}>
//         <select name="issueId" value={form.issueId} onChange={handleChange} disabled={!selectedService} className={fieldClass("issueId")} aria-invalid={Boolean(errors.issueId)}>
//           <option value="">{selectedService ? "Select an issue" : "Select an appliance first"}</option>
//           {selectedService?.issues.map((issue, index) => <option key={issue} value={index + 1}>{issue}</option>)}
//         </select>
//       </Field>

//       {!compact && (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <Field label="Preferred Date" optional error={errors.preferredDate}>
//             <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} min={getLocalDate()} className={fieldClass("preferredDate")} aria-invalid={Boolean(errors.preferredDate)} />
//           </Field>
//           <Field label="Preferred Time" optional>
//             <select name="preferredTime" value={form.preferredTime} onChange={handleChange} className={fieldClass("preferredTime")}>
//               <option value="">Any available time</option>
//               {timeOptions.map((time) => <option key={time} value={time}>{time}</option>)}
//             </select>
//           </Field>
//         </div>
//       )}

//       <Field label="Remarks" optional error={errors.remarks}>
//         <textarea name="remarks" value={form.remarks} onChange={handleChange} rows={compact ? 3 : 4} maxLength={500} placeholder="Add any details that may help the technician" className={`${fieldClass("remarks")} resize-none`} aria-invalid={Boolean(errors.remarks)} />
//       </Field>

//       {submitError && (
//         <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
//           <AlertCircle className="mt-0.5 shrink-0" size={17} />
//           <span>{submitError}</span>
//         </div>
//       )}

//       <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
//         {status === "submitting" ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : <><Send size={16} /> Submit Booking</>}
//       </button>
//       <p className="text-center text-[11px] text-slate-400">By submitting, you agree to be contacted by our team regarding your service request.</p>
//     </form>
//   );
// }

// function Field({ label, optional = false, error, children }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//         {label} {optional ? <span className="font-normal text-slate-400">(optional)</span> : "*"}
//       </label>
//       {children}
//       {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
//     </div>
//   );
// }



"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

const API_BASE = "http://localhost:5000/api/consumerservices";
const BOOKING_API_URL = "http://localhost:5000/api/booking";

const timeOptions = ["09:00", "11:00", "13:00", "15:00", "17:00"];
const fullNamePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/;
const locationPattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobilePattern = /^[6-9]\d{9}$/;
const pincodePattern = /^\d{6}$/;

const initialForm = {
  customerName: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  serviceId: "",
  serviceTypeId: "",
  issueId: "",
  preferredDate: "",
  preferredTime: "",
  remarks: "",
};

function getLocalDate() {
  const today = new Date();
  const offset = today.getTimezoneOffset() * 60000;
  return new Date(today.getTime() - offset).toISOString().split("T")[0];
}

// De-duplicates servicetypes rows (see note on the services detail page —
// some rows currently exist twice in the DB) keeping the most recent one.
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

export default function LeadForm({ presetService = "", compact = false }) {
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);

  const [serviceTypes, setServiceTypes] = useState([]);
  const [serviceTypesLoading, setServiceTypesLoading] = useState(false);

  const [issues, setIssues] = useState([]);
  const [issuesLoading, setIssuesLoading] = useState(false);

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  // Load the appliance/service list once on mount.
  useEffect(() => {
    let cancelled = false;
    async function loadServices() {
      try {
        const res = await fetch(`${API_BASE}/getallservices`);
        const result = await res.json();
        if (!cancelled && result?.success) {
          setServices(result.data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        if (!cancelled) setServicesLoading(false);
      }
    }
    loadServices();
    return () => {
      cancelled = true;
    };
  }, []);

  // Once services are loaded, apply the presetService (from a service
  // detail page's "Book <ServiceName>") by matching its name.
  useEffect(() => {
    if (!presetService || services.length === 0) return;
    const match = services.find((s) => s.name === presetService);
    if (match) {
      setForm((current) => ({ ...current, serviceId: String(match.id) }));
    }
  }, [presetService, services]);

  // Whenever the selected appliance changes, fetch its service types and
  // common issues in parallel, and reset the two dependent fields.
  useEffect(() => {
    if (!form.serviceId) {
      setServiceTypes([]);
      setIssues([]);
      return;
    }

    let cancelled = false;
    setServiceTypesLoading(true);
    setIssuesLoading(true);

    fetch(`${API_BASE}/servicetypes/${form.serviceId}`)
      .then((res) => res.json())
      .then((result) => {
        if (!cancelled && result?.success) {
          setServiceTypes(dedupeByName(result.data));
        }
      })
      .catch((error) => console.error("Error fetching service types:", error))
      .finally(() => {
        if (!cancelled) setServiceTypesLoading(false);
      });

    fetch(`${API_BASE}/commonissues/${form.serviceId}`)
      .then((res) => res.json())
      .then((result) => {
        if (!cancelled && result?.success) {
          setIssues(result.data);
        }
      })
      .catch((error) => console.error("Error fetching common issues:", error))
      .finally(() => {
        if (!cancelled) setIssuesLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [form.serviceId]);

  const selectedService = useMemo(
    () => services.find((s) => String(s.id) === form.serviceId),
    [services, form.serviceId],
  );

  function handleChange(event) {
    const { name, value } = event.target;
    let nextValue = value;

    if (name === "mobile") nextValue = value.replace(/\D/g, "").slice(0, 10);
    if (name === "pincode") nextValue = value.replace(/\D/g, "").slice(0, 6);

    setForm((current) => ({
      ...current,
      [name]: nextValue,
      // Changing the appliance invalidates whatever was picked below it.
      ...(name === "serviceId" ? { serviceTypeId: "", issueId: "" } : {}),
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitError("");
  }

  function validate() {
    const nextErrors = {};
    const name = form.customerName.trim();
    const city = form.city.trim();
    const state = form.state.trim();

    if (!name) nextErrors.customerName = "Full name is required";
    else if (!fullNamePattern.test(name)) {
      nextErrors.customerName = "Use at least two names with letters and spaces only";
    }

    if (form.email.trim() && !emailPattern.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!mobilePattern.test(form.mobile)) {
      nextErrors.mobile = "Enter a 10-digit mobile number starting with 6, 7, 8, or 9";
    }
    if (form.address.trim().length < 5) {
      nextErrors.address = "Enter a complete address";
    }
    // if (!locationPattern.test(city)) {
    //   nextErrors.city = "Enter a valid city using letters and spaces only";
    // }
    // if (!locationPattern.test(state)) {
    //   nextErrors.state = "Enter a valid state using letters and spaces only";
    // }
    if (!pincodePattern.test(form.pincode)) {
      nextErrors.pincode = "Enter a valid 6-digit pincode";
    }
    if (!form.serviceId) nextErrors.serviceId = "Please select an appliance";
    if (!form.serviceTypeId) {
      nextErrors.serviceTypeId = "Please select a service type";
    }
    if (!form.issueId) nextErrors.issueId = "Please select the issue";
    if (form.preferredDate && form.preferredDate < getLocalDate()) {
      nextErrors.preferredDate = "Preferred date cannot be in the past";
    }
    if (form.remarks.trim().length > 500) {
      nextErrors.remarks = "Remarks cannot exceed 500 characters";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setSubmitError("");

    const payload = {
      customer_name: form.customerName.trim(),
      email: form.email.trim().toLowerCase(),
      mobile: form.mobile,
      address: form.address.trim(),
      // city: form.city.trim(),
      // state: form.state.trim(),
      pincode: form.pincode,
      service_id: Number(form.serviceId),
      service_type_id: Number(form.serviceTypeId),
      issue_id: Number(form.issueId),
      preferred_date: form.preferredDate || "",
      preferred_time: form.preferredTime || "",
      remarks: form.remarks.trim(),
    };

    try {
      const response = await fetch(BOOKING_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const responseBody = await response.json().catch(() => ({}));

      if (!response.ok || responseBody.success === false) {
        throw new Error(responseBody.message || "We could not submit your booking.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not submit your booking. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="text-emerald-500" size={40} />
        <h3 className="mt-4 text-lg font-bold text-emerald-800">
          Thank You for Your Booking!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-emerald-700">
          Your request has been received. Our team will call you shortly to
          confirm your appointment.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-6">
          Book Another Service
        </button>
      </div>
    );
  }

  const fieldClass = (field) =>
    `input-field ${errors[field] ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name" error={errors.customerName}>
          <input type="text" name="customerName" value={form.customerName} onChange={handleChange} placeholder="Your full name" autoComplete="name" className={fieldClass("customerName")} aria-invalid={Boolean(errors.customerName)} />
        </Field>
        <Field label="Mobile Number" error={errors.mobile}>
          <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit mobile number" autoComplete="tel" inputMode="numeric" className={fieldClass("mobile")} aria-invalid={Boolean(errors.mobile)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Email Address" optional error={errors.email}>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" className={fieldClass("email")} aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field label="Pincode" error={errors.pincode}>
          <input type="text" name="pincode" value={form.pincode} onChange={handleChange} placeholder="6-digit pincode" autoComplete="postal-code" inputMode="numeric" className={fieldClass("pincode")} aria-invalid={Boolean(errors.pincode)} />
        </Field>
      </div>

      <Field label="Full Address" error={errors.address}>
        <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="House no, street, locality" autoComplete="street-address" className={fieldClass("address")} aria-invalid={Boolean(errors.address)} />
      </Field>

      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="City" error={errors.city}>
          <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="e.g. Noida" autoComplete="address-level2" className={fieldClass("city")} aria-invalid={Boolean(errors.city)} />
        </Field>
        <Field label="State" error={errors.state}>
          <input type="text" name="state" value={form.state} onChange={handleChange} placeholder="e.g. Uttar Pradesh" autoComplete="address-level1" className={fieldClass("state")} aria-invalid={Boolean(errors.state)} />
        </Field>
      </div> */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Appliance" error={errors.serviceId}>
          <select name="serviceId" value={form.serviceId} onChange={handleChange} disabled={servicesLoading} className={fieldClass("serviceId")} aria-invalid={Boolean(errors.serviceId)}>
            <option value="">{servicesLoading ? "Loading appliances..." : "Select an appliance"}</option>
            {services.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
          </select>
        </Field>
        <Field label="Service Type" error={errors.serviceTypeId}>
          <select name="serviceTypeId" value={form.serviceTypeId} onChange={handleChange} disabled={!form.serviceId || serviceTypesLoading} className={fieldClass("serviceTypeId")} aria-invalid={Boolean(errors.serviceTypeId)}>
            <option value="">
              {!form.serviceId ? "Select an appliance first" : serviceTypesLoading ? "Loading..." : "Select a service type"}
            </option>
            {serviceTypes.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Issue" error={errors.issueId}>
        <select name="issueId" value={form.issueId} onChange={handleChange} disabled={!form.serviceId || issuesLoading} className={fieldClass("issueId")} aria-invalid={Boolean(errors.issueId)}>
          <option value="">
            {!form.serviceId ? "Select an appliance first" : issuesLoading ? "Loading..." : "Select an issue"}
          </option>
          {issues.map((issue) => <option key={issue.id} value={issue.id}>{issue.name}</option>)}
        </select>
      </Field>

      {!compact && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Preferred Date" optional error={errors.preferredDate}>
            <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} min={getLocalDate()} className={fieldClass("preferredDate")} aria-invalid={Boolean(errors.preferredDate)} />
          </Field>
          <Field label="Preferred Time" optional>
            <select name="preferredTime" value={form.preferredTime} onChange={handleChange} className={fieldClass("preferredTime")}>
              <option value="">Any available time</option>
              {timeOptions.map((time) => <option key={time} value={time}>{time}</option>)}
            </select>
          </Field>
        </div>
      )}

      <Field label="Remarks" optional error={errors.remarks}>
        <textarea name="remarks" value={form.remarks} onChange={handleChange} rows={compact ? 3 : 4} maxLength={500} placeholder="Add any details that may help the technician" className={`${fieldClass("remarks")} resize-none`} aria-invalid={Boolean(errors.remarks)} />
      </Field>

      {submitError && (
        <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 shrink-0" size={17} />
          <span>{submitError}</span>
        </div>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : <><Send size={16} /> Submit Booking</>}
      </button>
      <p className="text-center text-[11px] text-slate-400">By submitting, you agree to be contacted by our team regarding your service request.</p>
    </form>
  );
}

function Field({ label, optional = false, error, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
        {label} {optional ? <span className="font-normal text-slate-400">(optional)</span> : "*"}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}