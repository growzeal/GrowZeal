
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. About This Policy",
    content: `This Privacy Policy explains how GrowZeal ("GrowZeal", "we", "us", "our") collects, uses, shares, stores and protects personal data when you visit our website, register for an internship, make a payment, or take part in a GrowZeal program. It should be read together with our Terms & Conditions and Internship Terms.

GrowZeal is the data fiduciary for the personal data described in this Policy. Our legal entity name and registered address are [●].

We process personal data in accordance with this Policy and applicable law, including the Digital Personal Data Protection Act, 2023 ("DPDP Act"), to the extent it applies.`,
  },
  {
    title: "2. Personal Data We Collect",
    content: `Depending on how you interact with us, we may collect:

• Registration details: full name, email address, mobile number, college or university, course or degree, branch or specialisation, academic year, skills or areas of interest, and location.

• Identity and eligibility information: documents or information we reasonably request to verify eligibility or registration details.

• Payment information: transaction reference, payment status, and billing details needed to issue a receipt or invoice. [Confirm exactly what payment data GrowZeal receives and whether any card or bank details are stored by GrowZeal or only by the payment service provider.]

• Program information: batch allocation, mentor and session attendance, submitted tasks and projects, documentation, evaluation scores, and certificate records.

• Communications: messages you send to us and records of messages we send to you.

• Website information: [Confirm whether the website uses cookies or analytics tools, and list them here.]`,
  },
  {
    title: "3. How We Use Personal Data",
    content: `We use personal data for the following purposes:

• Registration and internship administration.
• Identity and eligibility verification.
• Batch allocation and mentor coordination.
• Recording attendance and evaluating submitted work.
• Issuing certificates and verifying certificate records.
• Payment administration, receipts, invoices and refunds.
• Communication about your program, including session schedules, payment, certificate and legal notices.
• Customer support and handling grievances.
• Legal and regulatory compliance.`,
  },
  {
    title: "4. Consent and Notice",
    content: `Where we rely on your consent, we will ask for it before we collect or use your personal data for that purpose. Consent is given through clear action, such as confirming acceptance of our Terms and this Policy before payment, which is not pre-selected.

You may withdraw your consent at any time by contacting us. Withdrawing consent may mean we cannot continue to provide some or all of the program, as explained in our Terms and Refund and Cancellation document. Withdrawal does not affect processing we carried out before it was withdrawn, or processing we are required by law to continue.`,
  },
  {
    title: "5. Sharing Personal Data",
    content: `We share personal data only where needed for the purposes in Section 3. This may include:

• Mentors, coordinators and GrowZeal staff who need the information to run your program.

• Service providers that help us operate the program, including payment gateways, video-conferencing platforms, cloud storage, email providers, communication platforms, learning platforms and analytics providers.

• Authorities or others where required by law or to protect rights, safety or property.

These providers may process personal data under their own terms and privacy policies. We require service providers to protect personal data appropriately. [Confirm: GrowZeal does not sell personal data.]`,
  },
  {
    title: "6. Communication and Marketing",
    content: `We may contact you by email, telephone, SMS, WhatsApp or other messaging platforms, website or account notifications, and other channels you provided during registration. Promotional messages are sent only where permitted by law. You may opt out of promotional messages at any time. Opting out does not stop messages that are necessary for your program, such as session schedules, payment, certificate and legal notices.`,
  },
  {
    title: "7. Retention",
    content: `We keep personal data only for as long as needed for the purposes in this Policy, or as required by law. Records of accepted Terms, payments, refund requests, supporting documents and eligibility decisions are kept as described in our Refund and Cancellation document. [Insert retention periods for each category of data, for example registration data, evaluation records and certificate records.]`,
  },
  {
    title: "8. Security",
    content: `We use reasonable administrative, technical and organisational measures to protect personal data against unauthorised access, loss, misuse or disclosure. [Describe the main safeguards in use.] No system is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "9. Children",
    content: `A person under 18 may register only with the prior consent of a parent or legal guardian, as set out in our Terms. We will process a child's personal data only with that verifiable consent, and in line with the DPDP Act.`,
  },
  {
    title: "10. Your Rights",
    content: `Subject to applicable law, you may:

• Ask for access to the personal data we hold about you.
• Ask us to correct inaccurate or incomplete personal data.
• Ask us to erase your personal data, where it is no longer needed or the law allows erasure.
• Withdraw your consent, as described in Section 4.
• Make a grievance about how we handle your personal data, as described in Section 11.

To exercise these rights, contact us using the details in Section 12. We may ask you to verify your identity before responding.`,
  },
  {
    title: "11. Grievances",
    content: `If you have a concern about how we handle your personal data, please contact our Grievance Officer:

Name and designation: [Name and designation of Grievance Officer]

Email: [email]

Phone: [phone]

We will acknowledge your complaint within 48 hours and resolve it, or give a reasoned reply, within 15 days and in any case within one month, consistent with the Grievances section of our Terms. If you are not satisfied, you may approach the appropriate Consumer Commission or use the National Consumer Helpline (1915).`,
  },
  {
    title: "12. Contact Us",
    content: `GrowZeal

Legal Entity Name: [●]

Registered/Business Address: [●]

Email: [●]

Phone: [●]

Website: [●]`,
  },
  {
    title: "13. Changes to This Policy",
    content: `We may update this Policy from time to time. The latest version will be published on our website with the applicable "Last Updated" date. Updates apply to personal data collected after the update and will not reduce the rights of a participant who has already registered, as described in our Terms.`,
  },
];

function PolicySection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="border-b border-white/10 py-7 last:border-0">
      <h2 className="mb-4 text-lg font-semibold leading-snug text-cyan-300 sm:text-xl">
        {title}
      </h2>

      <div className="whitespace-pre-line text-sm leading-7 text-slate-300 sm:text-[15px]">
        {content}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <header className="mb-10 border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            GrowZeal
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-sm text-slate-400">
            Last Updated: 5 November 2026
          </p>
        </header>

        <div className="mb-8 border-b border-white/10 pb-7 text-sm leading-7 text-slate-300 sm:text-[15px]">
          <p className="mb-3 font-medium text-cyan-300">
            Draft for review
          </p>
          <p>
            Items in square brackets must be completed or confirmed by
            GrowZeal before this Policy is published.
          </p>
        </div>

        {sections.map((section) => (
          <PolicySection
            key={section.title}
            title={section.title}
            content={section.content}
          />
        ))}

        <div className="mt-10 border-t border-white/10 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} GrowZeal. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
