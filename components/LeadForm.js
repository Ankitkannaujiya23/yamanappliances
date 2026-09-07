"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/data/services";

const initialForm = {
  name: "",
  phone: "",
  address: "",
  city: "",
  service: "",
  issue: "",
  preferredDate: "",
};

export default function LeadForm({ presetService = "", compact = false }) {
  const [form, setForm] = useState({
    ...initialForm,
    service: presetService,
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Contact number is required";
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim()))
      errs.phone = "Enter a valid phone number";
    if (!form.address.trim()) errs.address = "Address is required";
    if (!form.service) errs.service = "Please select a service";
    if (!form.issue.trim()) errs.issue = "Please describe the issue";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    // TODO (backend): replace this block with a real API call, e.g.
    // const res = await fetch("/api/lead", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // The route at app/api/lead/route.js is stubbed out and ready —
    // just plug in your email service (Resend / Nodemailer / SendGrid) there.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    setForm({ ...initialForm, service: presetService });
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="text-emerald-500" size={40} />
        <h3 className="mt-4 text-lg font-bold text-emerald-800">
          Request Received!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-emerald-700">
          Our team will call you shortly to confirm your booking. For urgent
          requirements, feel free to call us directly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Book Another Service
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="input-field"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">
            Contact Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="input-field"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-slate-600">
          Full Address *
        </label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="House no, street, locality"
          className="input-field"
        />
        {errors.address && (
          <p className="mt-1 text-xs text-red-500">{errors.address}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">
            City / Area
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="e.g. Dwarka, Noida Sector 62"
            className="input-field"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">
            Appliance / Service *
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-500">{errors.service}</p>
          )}
        </div>
      </div>

      {!compact && (
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">
            Preferred Date
          </label>
          <input
            type="date"
            name="preferredDate"
            value={form.preferredDate}
            onChange={handleChange}
            className="input-field"
          />
        </div>
      )}

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-slate-600">
          Describe the Issue *
        </label>
        <textarea
          name="issue"
          value={form.issue}
          onChange={handleChange}
          rows={compact ? 3 : 4}
          placeholder="e.g. AC is not cooling, making noise since last week"
          className="input-field resize-none"
        />
        {errors.issue && (
          <p className="mt-1 text-xs text-red-500">{errors.issue}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <Send size={16} /> Submit & Get Callback
          </>
        )}
      </button>
      <p className="text-center text-[11px] text-slate-400">
        By submitting, you agree to be contacted by our team regarding your
        service request.
      </p>
    </form>
  );
}
