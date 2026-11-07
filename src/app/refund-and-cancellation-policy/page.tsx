
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "12.1 Meaning of Terms",
    content: `• Batch Start Date: the date and time of the first scheduled mentor session or first assigned task of the participant’s batch, whichever is earlier, as stated in the registration confirmation.

• Cancellation Deadline: 2 days (48 hours) before the Batch Start Date and time.

• Working Day: Monday to Saturday, excluding public holidays.

• Payment Gateway Charges: the charges (including taxes on them) levied by the payment gateway on the participant’s original payment. The amount applicable to the program fee is shown on the payment page before payment.

• Pro-rata amount: the fee multiplied by (mentor sessions not delivered ÷ total scheduled mentor sessions). A session is “not delivered” only if GrowZeal fails to hold it; a session that the participant misses, skips or does not attend is treated as delivered. “Substantial service” means at least two Scheduled Sessions delivered to the participant.`,
  },
  {
    title: "12.2 Cancellation by the Participant",
    content: `A participant who wishes to cancel participation must send the cancellation request to GrowZeal so that it is received on or before the Cancellation Deadline. A request received before the Cancellation Deadline results in a refund of the fee paid minus the Payment Gateway Charges, which are borne by the participant.

If a participant pays less than 2 days before the Batch Start Date, the cancellation request must be received within 24 hours of payment and before the Batch Start Date.

A participant who does not cancel on or before the Cancellation Deadline remains enrolled. Once the batch has started, no refund is provided for a cancellation or for a participant who stops participating.`,
  },
  {
    title: "12.3 Conditions on Which a Refund Is Payable",
    content: `Situation 1 — Participant cancels in time:
Condition: Cancellation request received on or before the Cancellation Deadline (see Section 12.2).
Refund: Fee minus Payment Gateway Charges.

Situation 2 — GrowZeal cancels the program or batch:
Condition: GrowZeal cancels the program or the participant’s batch and the participant does not accept a transfer to another batch.
Refund: 100% of fee (no deduction).

Situation 3 — No batch allocated:
Condition: GrowZeal has not allocated the participant to a batch within 30 days of payment.
Refund: 100% of fee (no deduction).

Situation 4 — Service failure by GrowZeal:
Condition: No mentor or project is available to the participant for more than 14 consecutive days because of GrowZeal, and the failure is not corrected within 7 days after the participant’s written complaint.
Refund: Pro-rata amount (100% if no substantial service was delivered); no deduction.

Situation 5 — Duplicate, excess or failed payment:
Condition: The amount was debited more than once, or was debited but registration was not confirmed and the participant does not want to continue.
Refund: Excess amount or full amount debited (no deduction).

In Situations 2 to 5 the refund is made even if the participant has completed part of the program, and the participant may keep any work they created. A request under Situations 2 to 5 must be made within 30 days of the event giving rise to it.`,
  },
  {
    title: "12.4 When a Refund Is Not Available",
    content: `Except as Situations 2 to 5 of Section 12.3, Section 12.5, Section 12.10 and Section 12.11 provide, a refund is not payable in the following cases, because the mentor allocation, project, resources and sessions have already been arranged for the participant:

• The request is received after the Cancellation Deadline, including any request made after the batch has started.

• The participant stops attending or submitting work, or cannot continue for personal reasons, after the batch has started.

• The participant is suspended or removed for serious misconduct such as plagiarism, fraud, false information, breach of confidentiality, unauthorised access, misbehaviour, abusive conduct, bullying or harassment, after the process described in the Termination or Suspension section. A participant whose participation is terminated for such misconduct is not entitled to a refund, subject to applicable law.

• The participant does not meet the successful completion requirements. The participant then receives a Certificate of Participation instead of a Certificate of Successful Completion. The fee is for participation in the program, not for any outcome, and opportunities are not part of what the fee purchases.

• The participant gave false information at registration and GrowZeal discovers this after the Batch Start Date.

• The participant changes their mind, or is dissatisfied with the domain, mentor, project, difficulty level or pace of the program, after the batch has started.

• The participant does not attend the first session or does not begin the program, or joins late, after the batch has started.

• The participant cannot continue because of their own circumstances, including device, internet or time availability, exams, job, health or relocation, after the batch has started.

• The participant does not respond to GrowZeal’s communications for 7 consecutive days after the batch has started. This is treated as a withdrawal by the participant.

• The participant is dissatisfied because they did not obtain a job, interview, PPO, stipend or placement, or because their evaluation result was lower than they expected.

• The participant breaches the Genuine Work Requirement or the Use of AI and External Tools section, including falsifying attendance, work or project completion, even if the participant is not removed.

• The participant shares, copies, resells or redistributes the Knowledge Base, session links, recordings, learning resources or their program account with others.

• The participant did not meet the eligibility requirements in the Eligibility section and misrepresented their eligibility.

• The participant paid a discounted or promotional fee. Any refund that is otherwise payable is limited to the amount the participant actually paid, and no refund is payable for a free or coupon-based seat.

• The participant raises a bank or card dispute or chargeback without first using the process in Section 12.6. GrowZeal may suspend access to the program while the dispute is pending, and any refund otherwise payable is reduced by dispute charges levied on GrowZeal.`,
  },
  {
    title: "12.5 Termination by GrowZeal Not Caused by the Participant",
    content: `If GrowZeal ends a participant’s participation for operational reasons or any reason that is not the participant’s breach or misconduct, the participant is entitled to the pro-rata amount, or the full fee if no substantial service was delivered, with no deduction.`,
  },
  {
    title: "12.6 How to Request a Refund or Cancellation",
    content: `1. The participant emails the email address listed in Section 37 (Contact), stating the registered email address, payment reference, program and reason, with supporting evidence where relevant (for example, a bank debit screenshot for a payment failure). A request that is not made in this manner is not treated as a valid request, but the participant may make it again in the correct manner within the time allowed in this section.

2. GrowZeal acknowledges the request within 48 hours. The time the request is received is the time of the email or form submission.

3. GrowZeal verifies eligibility against the conditions in Sections 12.2, 12.3, 12.5 and 12.10 and communicates its decision, with reasons, within 7 Working Days.

4. An approved refund is paid to the original payment method within 7 Working Days of approval. Bank or card credit times may add further days.

5. If the request is rejected, the participant may escalate it through the Grievances section.`,
  },
  {
    title: "12.7 Records",
    content: `GrowZeal keeps a record of the version of the Terms accepted, the payment, the refund request, supporting documents, the eligibility decision and the refund transaction.`,
  },
  {
    title: "12.8 Terms Fixed at Payment",
    content: `The refund conditions in force when a participant paid continue to apply to that participant. Later changes to these Terms will not reduce them.`,
  },
  {
    title: "12.9 Further Terms on Refunds",
    content: `• Service is delivered from the Batch Start Date. From that date the participant’s mentor, project, Knowledge Base access and session slots are reserved for the participant and cannot be given to anyone else. For that reason no full or partial refund is payable after the Batch Start Date, except under Situations 2 to 5 of Section 12.3, Section 12.5 or Section 12.10.

• Access to the Knowledge Base, learning resources, session links or recordings, once given, is treated as delivery of the service. A participant who has been given such access is not entitled to a refund on the ground that they did not use it.

• No refund is payable after a certificate has been issued to the participant, except a refund under Section 12.3 or Section 12.5, or a refund under Section 12.10 to a participant who received the Certificate of Successful Completion.

• Changes that GrowZeal makes under the Program Changes section, such as a change of session timing, mentor, tool or project detail, are not a ground for a refund where the program is still delivered in substance.

• A participant who registers for the wrong program, domain or batch must request a correction before the Cancellation Deadline. GrowZeal may, at its discretion, allow one transfer to another batch. A participant who has been transferred is not entitled to a refund on the ground of the transfer.

• A refund, where payable, is made only to the original payment method and only to the person who made the payment. It is not made in cash or to a third party.

• Payment Gateway Charges are deducted from a refund wherever Section 12.2 or Section 12.10 says so. They are not refunded to the participant in any other case where the participant is responsible for the cancellation.

• A participant may make one refund request for each payment. A request that has been decided is not reopened, except through the Grievances section or where new evidence is provided.

• A participant who has read and accepted these refund conditions through the check-box before payment cannot later claim that they were unaware of them.

Each of these terms applies subject to Section 12.11 and does not limit any refund that is payable under Section 12.3 or Section 12.5.`,
  },
  {
    title: "12.10 Refund on Successful Completion",
    content: `A participant who is recorded as “Successfully completed” under Section 19.3 because they meet every requirement in Section 20.2, and who has received the Certificate of Successful Completion, is eligible for a refund of the fee paid, less the Payment Gateway Charges, on the following conditions:

• The participant makes the request using the process in Section 12.6 within 30 days after the Certificate of Successful Completion is issued.

• The request is made by the participant who paid the fee, and the refund is paid to the original payment method.

• The participant has no unresolved plagiarism, fraud, false-information, confidentiality or disciplinary matter.

• The refund covers only the amount the participant actually paid. It is not available for a free or coupon-based seat.

• A request made after the 30 days is not payable.

• An approved refund is paid within 7 Working Days of approval, as set out in Section 12.6.

A participant who does not meet Section 20.2 is not eligible for a refund under this section and remains subject to Section 12.4. A refund under this section is in addition to, and does not replace, the refunds in Section 12.3 and Section 12.5.`,
  },
  {
    title: "12.11 Statutory Rights",
    content: `Nothing in this section limits the participant’s rights under the Consumer Protection Act, 2019 or any other applicable law.`,
  },
  {
    title: "37. Contact",
    content: `GrowZeal

Legal Entity Name: [●]

Registered/Business Address: [●]

Email: [●]

Phone: [●]

Website: [●]`,
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

export default function RefundAndCancellationPolicyPage() {
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
            Refund & Cancellation Policy
          </h1>
          <p className="mt-5 text-sm text-slate-400">
            Last Updated: 5 November 2026
          </p>
        </header>

        <div className="mb-8 text-sm leading-7 text-slate-300 sm:text-[15px]">
          <h2 className="mb-4 text-lg font-semibold text-cyan-300 sm:text-xl">
            12. Refund and Cancellation
          </h2>
          <p>
            A refund is payable only when the participant satisfies the
            conditions stated in this section. These conditions are published
            before payment, apply equally to every participant, and will not
            be changed against a participant after that participant has paid.
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
