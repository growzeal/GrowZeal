
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. About GrowZeal",
    content: `GrowZeal (“GrowZeal”, “we”, “us”, “our”) provides internship and practical learning opportunities intended to help students and eligible participants gain exposure to professional work, projects, practical assignments, mentoring and workplace-oriented skills.

The exact nature, duration, skill area, project structure, batch schedule and deliverables of a particular internship will be communicated on the relevant program page, registration form, offer/confirmation communication or other official GrowZeal communication.

In these Terms, “participant” and “you” mean any person who registers for, pays for or takes part in a GrowZeal program.`,
  },
  {
    title: "2. Eligibility",
    content: `Unless otherwise specified for a particular program:

1. The program is open to any person who is pursuing or holds a degree, diploma or any other educational qualification.

2. A participant must be at least 18 years old. A person below 18 may register only with the prior consent of a parent or legal guardian, who is responsible for the participant’s compliance with these Terms and for the payment.

3. Participants must provide accurate and complete information during registration.

4. GrowZeal may request reasonable information or documents to verify eligibility or registration details.

5. A participant must not register using another person’s identity or information.

6. GrowZeal may specify additional eligibility requirements for particular programs.

Providing false, misleading or incomplete information may result in cancellation or termination of participation.`,
  },
  {
    title: "3. Internship Registration",
    content: `Registration is completed through the process specified by GrowZeal.

Registration may require the participant to provide information such as:

• Full name
• Email address
• Mobile number
• College/university
• Course/degree
• Branch/specialisation
• Academic year
• Skills or areas of interest
• Location
• Other information reasonably required for administration of the internship

Registration does not automatically create an employment relationship with GrowZeal or guarantee employment with GrowZeal or any other organisation.`,
  },
  {
    title: "4. No Screening or Interview Requirement",
    content: `Unless a particular program expressly states otherwise, GrowZeal does not require a conventional screening test or interview as a mandatory condition for participation in the internship program.

However, GrowZeal may verify registration information, eligibility, capacity, documentation or other administrative requirements.

Participation remains subject to the availability and structure of the applicable batch.`,
  },
  {
    title: "5. Batch Allocation",
    content: `GrowZeal may organise registered participants into batches based on operational requirements, including:

• Number of participants
• Internship skill/track
• Registration period
• Project requirements
• Mentor availability
• Program capacity
• Scheduling requirements
• Other reasonable administrative considerations

Participants do not have an automatic right to choose a particular batch, mentor, coordinator or project unless GrowZeal expressly provides such an option.

GrowZeal may modify batch allocation where reasonably necessary for program administration.`,
  },
  {
    title: "6. Internship Duration",
    content: `The duration of an internship is between 60 and 90 days, depending on the internship program. The exact duration of each program is stated on the applicable program page before payment.

The duration of the participant’s program is fixed before payment and is shown in the registration confirmation together with the Batch Start Date.

The Batch Start Date and time will be communicated in the registration confirmation. GrowZeal may adjust dates for holidays or operational reasons and will communicate any change through official communication channels.`,
  },
  {
    title: "7. Mentor Guidance",
    content: `Where mentor support is included in a program:

1. Participants may receive guidance from an assigned mentor.

2. Mentoring may include project guidance, task clarification, practical guidance, doubt resolution and general professional guidance.

3. Mentor sessions may be conducted according to the schedule communicated for the applicable batch.

4. Mentors are not required to provide continuous one-to-one support unless specifically included in the program.

5. A mentor’s guidance does not constitute a guarantee of employment, job placement, salary, stipend or PPO.

6. GrowZeal may replace or reassign a mentor where reasonably required.`,
  },
  {
    title: "8. Weekly Sessions",
    content: `Where the applicable program specifies weekly mentor sessions, sessions will be scheduled according to the batch plan.

A program includes approximately one scheduled mentor session per week. For example, a 90-day program has about 12 sessions and a 60-day program has about 8 sessions. The exact number for each program is stated on the program page before payment.

GrowZeal may change the timing, duration and format of sessions where reasonably necessary.

Participants are responsible for attending scheduled sessions and reviewing official communications.`,
  },
  {
    title: "9. Projects and Assignments",
    content: `Participants may be assigned projects, tasks, assignments, research activities, documentation work or other practical activities.

Assignments may be individual or team-based.

GrowZeal may modify project requirements where reasonably necessary because of operational, educational, technical, business or other legitimate considerations.

Participants must not submit work copied from another person or unlawfully obtained from another source.`,
  },
  {
    title: "10. Internship Fee",
    content: `Where a program is offered for a fee, the applicable fee, including applicable taxes, will be displayed on the program page and the payment page before payment is made.

The fee for each GrowZeal internship program is the amount displayed on the program page and the payment page before payment (inclusive of all applicable taxes) per participant per program, and that displayed amount is the amount payable.

What the fee covers: participation in the program as described on the program page, namely an assigned internship track and project, structured practical tasks, curated learning resources and a Knowledge Base (KB), scheduled mentor sessions, review of submitted work, evaluation, and a certificate: a Certificate of Successful Completion if the successful completion requirements are met, or otherwise a Certificate of Participation. Every participant who is not removed for serious misconduct under Section 20 receives one of the two certificates.

What the fee does not cover: the fee is not a job-placement or recruitment fee and is not payment for any job, employment, salary, stipend, PPO or career outcome. It also does not cover paid third-party tools or courses.

Refunds are available only as set out in the Refund and Cancellation section of these Terms, including the deduction of payment gateway charges where that section provides for it. The payment gateway charge that applies to a refund on cancellation by a participant is shown on the payment page before payment.

The participant should review the applicable program information before making payment.`,
  },
  {
    title: "11. Payment",
    content: `Payments must be made through the payment methods made available by GrowZeal or its authorised payment service providers.

The participant is responsible for ensuring that the information entered during payment is correct.

A successful payment does not by itself guarantee successful completion, a Certificate of Successful Completion, employment, stipend, PPO or placement.

Where a payment is deducted but the registration status is not successfully updated, the participant should contact GrowZeal with the relevant transaction information.

In that case GrowZeal will either confirm the registration or refund the amount, as set out in the Refund and Cancellation section.

Before payment, the participant must confirm acceptance of these Terms and the Refund and Cancellation section through a check-box that is not pre-selected, or an equivalent clear action. After successful payment, GrowZeal will send a payment receipt or invoice by email.

Payment-related matters may also be subject to the terms of the relevant payment service provider.`,
  },
  {
    title: "12. Refund and Cancellation",
    content: `The refund and cancellation conditions for GrowZeal programs are set out in the separate Refund and Cancellation document, which forms part of these Terms. Where these Terms refer to the Refund and Cancellation section, that document applies.`,
  },
  {
    title: "13. Intern Responsibilities",
    content: `Participants are expected to:

• Attend scheduled sessions where applicable.
• Complete assigned tasks within the specified timelines.
• Participate actively in projects.
• Communicate professionally with mentors, coordinators and GrowZeal representatives.
• Submit genuine and original work.
• Follow project instructions.
• Follow applicable confidentiality requirements.
• Protect access credentials and organisational information.
• Maintain professional conduct.
• Respond to reasonable communications concerning the internship.
• Complete required project documentation and final submissions.`,
  },
  {
    title: "14. Attendance and Participation",
    content: `Attendance requirements may vary by program.

Where attendance is required for successful completion, participants must satisfy the applicable attendance requirement communicated by GrowZeal.

Repeated absence, failure to participate, failure to respond to communications or failure to complete required work may affect eligibility for the Certificate of Successful Completion or other program benefits.

The attendance requirement, task-completion requirement and minimum score needed for the Certificate of Successful Completion will be stated on the program page before payment.`,
  },
  {
    title: "15. Genuine Work Requirement",
    content: `Participants must complete assigned work honestly and independently, except where collaboration is expressly permitted.

The following may be treated as violations:

• Plagiarism
• Copying another participant’s work
• Falsifying work
• Falsifying attendance
• Misrepresenting project completion
• Submitting work generated or obtained from another person without appropriate disclosure where disclosure is required
• Manipulating records or evidence
• Misrepresenting practical experience

GrowZeal may investigate suspected violations and take appropriate action.`,
  },
  {
    title: "16. Use of AI and External Tools",
    content: `Participants may use AI tools or external resources only where permitted by the applicable project instructions.

Participants remain responsible for the accuracy, originality, legality and quality of their submitted work.

Participants must not:

• Present another person’s work as their own.
• Upload confidential GrowZeal information to unauthorised third-party AI tools.
• Upload personal data or confidential information without appropriate authorisation.
• Use AI or automation to falsify attendance, performance or project completion.
• Violate third-party intellectual property rights.

Individual projects may contain additional AI-use rules.`,
  },
  {
    title: "17. Code of Conduct",
    content: `Participants must maintain professional and respectful behaviour.

Prohibited conduct includes:

• Harassment
• Threatening behaviour
• Abusive communication
• Discrimination
• Bullying
• Fraud
• Impersonation
• Cheating
• Plagiarism
• Unauthorised access
• Misuse of credentials
• Distribution of confidential information
• Unauthorised recording or publication of sessions where prohibited
• Unlawful activities
• Any conduct that materially disrupts the internship or harms another participant, mentor or GrowZeal

GrowZeal may investigate reported violations and, where appropriate, give the participant an opportunity to respond before taking action. Depending on the seriousness of the conduct and the circumstances, GrowZeal may suspend or terminate the participant’s participation. A participant whose participation is terminated for misbehaviour, abusive conduct, bullying or harassment will not receive any certificate and will not be entitled to a refund, subject to applicable law.`,
  },
  {
    title: "18. Confidentiality",
    content: `Participants may receive access to non-public information, documents, project information, processes, resources, credentials or other confidential information.

Participants must:

• Keep confidential information secure.
• Use confidential information only for authorised internship activities.
• Not disclose confidential information to unauthorised persons.
• Not publish confidential information online.
• Not share credentials.
• Not copy or distribute internal resources without permission.
• Return or delete confidential information when requested.

These obligations may continue after the internship ends to the extent permitted or required by applicable law or agreement.`,
  },
  {
    title: "19. Evaluation",
    content: `Where evaluation is part of the program, evaluation may consider factors such as:

• Task completion
• Quality of work
• Timeliness
• Project contribution
• Attendance
• Participation
• Professional conduct
• Documentation
• Practical application of skills
• Final project or assignment

The specific evaluation criteria may vary by program.

Participation in an internship does not guarantee a particular evaluation result.`,
  },
  {
    title: "19.1 Evaluation Score",
    content: `Each participant is scored out of 100 marks as follows. The marks for each component, and the weight of each, will be stated on the program page before payment; if they are not stated, the following apply.

• Task completion and timeliness: 30 marks
• Quality of work and practical application of skills: 25 marks
• Final project or assignment: 25 marks
• Attendance and participation: 10 marks
• Documentation: 5 marks
• Professional conduct: 5 marks

The overall evaluation score is the total of these marks, expressed as a percentage. Scores are not rounded up. A score of 84.9% does not meet an 85% requirement.`,
  },
  {
    title: "19.2 How Attendance and Tasks Are Counted",
    content: `• Attendance is counted as the number of scheduled mentor sessions and weekly sessions that the participant attended, divided by the total number scheduled for the batch. A participant who joins late or leaves early for more than half of a session is marked absent for that session.

• A session that GrowZeal cancels, or fails to hold, is removed from both the number attended and the total scheduled.

• An absence is excused, and removed from the total, only if the participant gives prior written notice or, in a genuine emergency, notice within 4 hours, with reasonable evidence, and GrowZeal approves it in writing. GrowZeal may offer a make-up session but is not required to.

• A task counts as completed only if it is submitted through the channel set by GrowZeal on or before its deadline and is accepted as meeting the task requirements. A task submitted late counts as completed only if GrowZeal has allowed an extension in writing.

• A task or final project that is found to be copied, falsified or otherwise in breach of the Genuine Work Requirement does not count as completed and receives no marks.`,
  },
  {
    title: "19.3 Result and Status",
    content: `• GrowZeal completes the evaluation and records each participant’s status as either “Successfully completed” or “Not successfully completed” within 10 days after the final submission date.

• The participant is informed of the status, the overall score, and the attendance and task percentages by email to the registered address. The status shown in that email is the status used for the certificate and for any refund under Section 12.10.`,
  },
  {
    title: "19.4 Review of the Result",
    content: `• A participant who believes the result is wrong may request one review by email within 7 days after receiving it, stating the reason and giving supporting evidence.

• The review is carried out by a person other than the original evaluator, and the participant is informed of the outcome with reasons within 7 Working Days.

• The reviewed result is final, subject to the participant’s right to use the Grievances section. A participant who does not request a review within 7 days accepts the result.`,
  },
  {
    title: "20. Certificates",
    content: `GrowZeal issues two types of certificate to eligible participants. A participant who does not complete the program or whose participation ends before the end of the batch will ordinarily receive a Certificate of Participation, unless the participant’s participation has been terminated for serious misconduct, including misbehaviour, abusive conduct, bullying or harassment. A participant terminated for such misconduct will not receive any certificate. For other participants, the certificate issued depends on whether they have met the successful completion requirements.`,
  },
  {
    title: "20.1 Types of Certificate",
    content: `Certificate of Successful Completion

Who receives it: A participant who meets all the successful completion requirements in Section 20.2.

What it confirms: That the participant successfully completed the program.

Certificate of Participation

Who receives it: Every other participant, that is, a participant who does not meet all the successful completion requirements.

What it confirms: That the participant took part in the program. It does not state that the program was successfully completed.`,
  },
  {
    title: "20.2 Successful Completion Requirements",
    content: `A participant is treated as having successfully completed the internship only if the participant meets ALL of the following. Where the program page states different figures before payment, those figures apply to that program.

• Attendance: attended at least 85% of the scheduled mentor sessions and weekly sessions.
• Tasks: completed and submitted at least 85% of the assigned tasks on or before their deadlines, including any extension GrowZeal allows in writing.
• Final project: submitted the final project or assignment by the final submission date.
• Evaluation score: obtained an overall evaluation score of at least 85%, assessed on the factors in the Evaluation section.
• Documentation: submitted the required documentation, such as the project report or work log.
• Conduct: complied with the Code of Conduct, the Genuine Work Requirement and the Use of AI and External Tools section.
• No violation: has no unresolved disciplinary, plagiarism or confidentiality matter at the time the evaluation is completed.

The requirements are measured as set out in the Evaluation section. A participant who does not meet every requirement above has not successfully completed the internship and receives the Certificate of Participation.`,
  },
  {
    title: "20.3 Content and Issue",
    content: `• Each certificate states the participant’s name, program, duration, role or domain, certificate type and issue date, and has a verification ID.

• Certificates are issued within 15 days after the evaluation for the batch ends.

• The certificates are issued by GrowZeal. They are not government certificates, university degrees or regulatory qualifications.

• Payment of the internship fee alone does not entitle a participant to the Certificate of Successful Completion. That certificate is issued only to a participant who meets the requirements in Section 20.2.`,
  },
  {
    title: "20.4 Corrections",
    content: `GrowZeal may correct administrative errors in certificates, including replacing a certificate with the correct type. If a Certificate of Successful Completion was obtained through plagiarism, fraud or false information, GrowZeal may replace it with a Certificate of Participation.`,
  },
  {
    title: "21. Internship Is Not Employment",
    content: `Unless expressly stated in a separate written agreement, participation in a GrowZeal internship does not create an employer-employee relationship between GrowZeal and the participant.

The internship is intended to provide practical learning and project experience.

The participant is not authorised to represent themselves as an employee, agent, partner or authorised representative of GrowZeal unless expressly authorised in writing.`,
  },
  {
    title: "22. No Guarantee of Outcomes, PPO and Employment",
    content: `GrowZeal does not guarantee that participation, payment of the fee or receipt of a certificate will result in:

• Employment
• Full-time, part-time or freelance employment
• Salary or a higher salary
• Job placement
• Promotion
• PPO
• Stipend
• Specific skills mastery
• Admission
• Academic credit
• Professional certification
• Any particular career outcome

Where GrowZeal offers a PPO or employment opportunity, it will be based on separate eligibility and selection criteria communicated for that opportunity.

Completion of an internship or receipt of a certificate does not itself create an entitlement to employment.

Participants are responsible for their own career and educational decisions.`,
  },
  {
    title: "23. Intellectual Property and Work Product",
    content: `Participant’s work: the participant keeps ownership of original work they create during the internship, except as stated below.

Work on real GrowZeal projects: where a task brief identifies the work as being for a real GrowZeal project or business use, the participant grants GrowZeal a non-exclusive, perpetual, royalty-free licence to use, edit, publish and adapt that work. The participant may show their own work in a portfolio or CV, but not any confidential information or customer or lead data contained in it.

GrowZeal’s materials: GrowZeal keeps ownership of its Knowledge Base (KB), templates, assignments, learning materials, branding and other pre-existing materials.

Participants must not assume that participation automatically gives them ownership of GrowZeal’s pre-existing materials, confidential information, templates, processes, trademarks, branding or proprietary resources.

Participants must not use GrowZeal’s branding, logo, documents or internal resources for commercial purposes without permission.

Where third-party materials are used, participants are responsible for complying with applicable third-party licence and intellectual-property requirements.`,
  },
  {
    title: "24. Personal Data",
    content: `GrowZeal may collect and process participant information for purposes such as:

• Registration
• Identity/eligibility verification
• Internship administration
• Batch allocation
• Mentor coordination
• Attendance
• Evaluation
• Certificate issuance
• Communication
• Payment administration
• Customer support
• Legal and regulatory compliance

Personal data will be handled in accordance with GrowZeal’s Privacy Policy and applicable law, including the Digital Personal Data Protection Act, 2023, to the extent it applies. Participants may contact GrowZeal to access or correct their personal data, to request its erasure, or to withdraw consent, as set out in the Privacy Policy.`,
  },
  {
    title: "25. Communication",
    content: `GrowZeal may communicate with participants through:

• Email
• Telephone
• SMS
• WhatsApp or other messaging platforms
• Website/account notifications
• Other communication channels provided during registration

Participants are responsible for maintaining access to the contact information provided during registration.

Failure to receive a message because incorrect or inaccessible contact information was provided does not necessarily make the communication invalid.

Promotional messages are sent only where permitted by law, and a participant may opt out of them at any time. Opting out does not stop messages that are necessary for the program, such as session schedules, payment, certificate and legal notices.`,
  },
  {
    title: "26. Termination or Suspension",
    content: `GrowZeal may suspend or terminate participation where reasonably necessary due to:

• Serious misconduct
• Fraud or misrepresentation
• Repeated non-participation
• Plagiarism or cheating
• Confidentiality breach
• Unauthorised access
• Abuse or harassment
• Violation of these Terms
• Legal or regulatory requirements
• Operational reasons
• Other serious circumstances affecting the program

Where appropriate, GrowZeal may provide an opportunity to clarify or respond before taking action.

Refunds on termination are governed by the Refund and Cancellation section. A participant removed for serious misconduct is not entitled to a refund under that section. A participant whose participation GrowZeal ends for operational reasons or any reason other than the participant’s breach is entitled to a refund as stated there.`,
  },
  {
    title: "27. Program Changes",
    content: `GrowZeal may modify:

• Mentor allocation
• Session schedules
• Project assignments
• Learning resources
• Batch arrangements
• Program processes
• Communication methods
• Administrative procedures

Material changes will be communicated where reasonably appropriate.

GrowZeal will not intentionally misrepresent the core nature of a paid program.`,
  },
  {
    title: "28. Third-Party Services",
    content: `GrowZeal may use third-party services such as:

• Payment gateways
• Video-conferencing platforms
• Cloud storage
• Email providers
• Communication platforms
• Learning platforms
• Analytics providers
• Other technology providers

Use of third-party services may be subject to their own terms and privacy policies.

GrowZeal is not responsible for independent service interruptions caused by third-party providers, subject to applicable law.`,
  },
  {
    title: "29. Website Content",
    content: `GrowZeal attempts to keep website information accurate and current.

However, program dates, fees, availability, schedules, mentor allocation, project details and other information may change.

Participants should rely on the latest official communication applicable to their registered program.

A later change to website information does not change the fee, duration or refund conditions already confirmed to a participant who has paid.`,
  },
  {
    title: "30. Limitation of Liability",
    content: `To the extent permitted by applicable law, GrowZeal will not be responsible for indirect, incidental, special or consequential losses arising from participation in a program.

Nothing in these Terms is intended to exclude or limit liability that cannot lawfully be excluded or limited.

Subject to applicable law, GrowZeal’s total liability for any claim relating to a program is limited to the fee paid by the participant for that program. This limit does not apply to GrowZeal’s fraud or wilful misconduct, and does not affect the participant’s rights under consumer protection law or the Refund and Cancellation section.`,
  },
  {
    title: "31. Force Majeure",
    content: `GrowZeal will not be responsible for delay or inability to perform caused by circumstances beyond its reasonable control, including natural disasters, government restrictions, major technical failures, internet disruptions, cyber incidents, strikes, public emergencies or other similar events.

If such an event prevents GrowZeal from delivering the program for more than 30 days, the participant may choose a transfer to a later batch or a refund under the Refund and Cancellation section.`,
  },
  {
    title: "32. Grievances",
    content: `Participants may raise complaints or concerns using:

Grievance Contact: the Grievance Officer listed in Section 37 (Contact)

Email: See Section 37 (Contact)
Phone: See Section 37 (Contact)
Address: See Section 37 (Contact)

GrowZeal will review every grievance and respond through an appropriate channel.

GrowZeal will acknowledge a complaint within 48 hours and will resolve it, or give a reasoned reply, within 15 days and in any case within one month. If the participant is not satisfied, they may approach the appropriate Consumer Commission or use the National Consumer Helpline (1915).`,
  },
  {
    title: "33. Governing Law and Jurisdiction",
    content: `These Terms will be governed by the laws applicable in India.

Subject to applicable law, disputes will be subject to the jurisdiction of the courts/competent authorities at the city in which GrowZeal’s registered business address (Section 37) is located.

Nothing in this section limits the participant’s right to approach the Consumer Commission or any other forum that has jurisdiction under applicable law, including at the place where the participant resides.`,
  },
  {
    title: "34. Changes to These Terms",
    content: `GrowZeal may update these Terms from time to time.

The latest version will be published on the website with the applicable “Last Updated” date.

Updated Terms apply to registrations made after the update. Updates will not reduce the rights, including refund rights, of a participant who has already paid.`,
  },
  {
    title: "35. Severability",
    content: `If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions will continue to the extent permitted by law.`,
  },
  {
    title: "36. Entire Understanding",
    content: `These Terms (including the Refund and Cancellation section), together with the applicable program-specific terms, Privacy Policy and other applicable agreements, constitute the terms governing participation in the GrowZeal program.

Where a specific written program agreement conflicts with a general website provision, the specific agreement will prevail to the extent of the conflict, provided that no agreement reduces the participant’s refund rights in the Refund and Cancellation section or rights under applicable law.`,
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

function TermsSection({
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

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">

        {/* Back to Home */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-10 border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            GrowZeal
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Terms & Conditions
            <span className="mt-2 block text-xl font-medium text-slate-300 sm:text-2xl">
              and Internship Terms
            </span>
          </h1>

          <p className="mt-5 text-sm text-slate-400">
            Last Updated: 5 November 2026
          </p>
        </header>

        {/* Introduction */}
        <div className="mb-8 space-y-4 text-sm leading-7 text-slate-300 sm:text-[15px]">
          <p>Welcome to GrowZeal.</p>

          <p>
            These Terms & Conditions (“Terms”) govern your access to and use
            of the GrowZeal website, registration for our internship programs,
            participation in internship activities, and use of related
            services, content, resources and communications.
          </p>

          <p>
            By accessing our website, registering for an internship, making a
            payment, or participating in a GrowZeal program, you acknowledge
            that you have read, understood and agreed to these Terms.
          </p>

          <p>
            If you do not agree with these Terms, please do not register for
            or participate in the program.
          </p>
        </div>

        {/* Terms Sections */}
        {sections.map((section) => (
          <TermsSection
            key={section.title}
            title={section.title}
            content={section.content}
          />
        ))}

        {/* Footer */}
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
