import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/data/site";

export const metadata = {
    title: `Terms & Conditions | ${site.name}`,
    description: `Terms and conditions for booking and using ${site.name}'s home appliance repair service.`,
    alternates: { canonical: "/terms-conditions" },
};

export default function TermsConditionsPage() {
    const lastUpdated = "September 20, 2026";

    return (
        <>
            <div className="border-b border-slate-100 bg-brand-950">
                <div className="container-x flex items-center gap-1.5 py-3 text-xs text-brand-300">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-white">Terms & Conditions</span>
                </div>
                <div className="container-x py-12 text-center sm:py-14">
                    <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                        Terms &amp; Conditions
                    </h1>
                    <p className="mt-2 text-sm text-brand-200">Last updated: {lastUpdated}</p>
                </div>
            </div>

            <div className="container-x py-14">
                <div className="prose prose-slate mx-auto max-w-3xl">
                    <p className="text-[15px] leading-relaxed text-slate-600">
                        These Terms &amp; Conditions govern your use of the {site.name}
                        {" "} website and the booking of appliance repair services through it.
                        By using this website or submitting a booking, you agree to these
                        terms.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Our Service
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        {site.name} allows you to book a home appliance repair visit
                        online. Once you submit a booking request, we coordinate with a
                        technician to visit your specified address and assess/repair the
                        appliance you have described.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Pricing and Payment
                    </h2>
                    <ul className="mb-5 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-600">
                        <li>
                            Prices listed on each service page are indicative and may vary
                            based on the exact issue diagnosed, spare parts required, and
                            your appliance&apos;s brand/model.
                        </li>
                        <li>
                            Final pricing for any repair, part replacement, or additional
                            work will be shared with you for confirmation before the work
                            is carried out.
                        </li>
                        <li>
                            The visiting/inspection charge, where applicable, covers the
                            technician&apos;s visit and initial diagnosis and is generally
                            payable regardless of whether you choose to proceed with the
                            repair, unless otherwise communicated to you at the time of
                            booking.
                        </li>
                        <li>
                            Payment is due at the time of service completion, via cash or
                            any digital payment method accepted by the technician on-site,
                            unless otherwise agreed in advance.
                        </li>
                    </ul>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Booking, Rescheduling &amp; Cancellation
                    </h2>
                    <ul className="mb-5 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-600">
                        <li>
                            You may cancel or reschedule a booking at no charge before a
                            technician has been assigned or dispatched for your visit.
                        </li>
                        <li>
                            Cancellations made after a technician has already been
                            dispatched to your address may be subject to the applicable
                            visiting charge.
                        </li>
                        <li>
                            Please ensure the address, contact number, and appliance/issue
                            details you provide at booking are accurate, as this
                            information is used to assign and guide the technician.
                        </li>
                    </ul>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Service Warranty
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        Any warranty applicable to a specific repair or part replacement,
                        if offered, will be communicated to you separately at the time of
                        service. Please retain any service/invoice details shared with
                        you for warranty-related requests.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Your Responsibilities
                    </h2>
                    <ul className="mb-5 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-600">
                        <li>You must be at least 18 years old to book a service on this website.</li>
                        <li>You are responsible for providing safe and reasonable access to the appliance for the technician.</li>
                        <li>You should disclose any known pre-existing damage or issues with the appliance at the time of booking, where possible.</li>
                    </ul>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Limitation of Liability
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        While our technicians take reasonable care during every service
                        visit, {site.name} is not liable for pre-existing faults, general
                        wear and tear, or issues unrelated to the specific repair
                        performed. Any damage directly caused by technician negligence
                        during the service visit will be assessed and addressed as per
                        our internal service policy in effect at that time.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Website Content
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        All text, branding, and design on this website belong to{" "}
                        {site.name} unless otherwise stated, and may not be copied or
                        reused without permission.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Changes to These Terms
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        We may update these Terms &amp; Conditions from time to time. Any
                        changes will be posted on this page with a revised
                        &quot;Last updated&quot; date.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Governing Law
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        These terms are governed by the laws of India.
                    </p>

                    <h2 className="mb-3 mt-10 text-xl font-bold text-brand-950">
                        Contact Us
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
                        For any questions about these Terms &amp; Conditions, contact us at{" "}
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