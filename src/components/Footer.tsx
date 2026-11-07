
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  Rocket,
  Code2,
  GraduationCap,
} from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/#home" },
  { label: "How It Works", href: "/#JourneySection" },
  { label: "Internships", href: "/#internships" },
  { label: "About Us", href: "/about" },
];

const supportLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  {
    label: "Refund & Cancellation",
    href: "/refund-and-cancellation-policy",
  },
];

const highlights = [
  {
    icon: GraduationCap,
    label: "Learn",
    description: "Build strong foundations",
  },
  {
    icon: Code2,
    label: "Build",
    description: "Work on practical projects",
  },
  {
    icon: Rocket,
    label: "Grow",
    description: "Move towards your goals",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050D19] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-7 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="GrowZeal Home"
              className="inline-flex items-center gap-2"
            >
              

              <Image
                src="/growzeal-navbar-logo.png"
                alt="GrowZeal"
                width={180}
                height={48}
                className="h-9 w-auto object-contain sm:h-11"
              />
            </Link>

            <h2 className="mt-7 max-w-sm text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Build Skills.
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Create Opportunities.
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Learn by doing. Build meaningful projects. Develop practical
              skills and take confident steps towards your career.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />

                    <div>
                      <p className="text-xs font-semibold text-white">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Information & Support
            </h3>

            <ul className="mt-6 space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative my-10 overflow-hidden rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-500/[0.08] via-white/[0.03] to-violet-500/[0.08] p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                <Sparkles className="h-4 w-4" />
                Your next step starts here
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Ready to turn learning into action?
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Explore opportunities and start building your future.
              </p>
            </div>

            <Link
              href="/#internships"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#061321] transition-all hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Explore Programs
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-2 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} GrowZeal. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Made to help you{" "}
            <span className="font-medium text-cyan-300">grow.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
