import { ArrowUpRight } from "lucide-react";

const links = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "privacy",
    href: "/privacy",
  },
];

const linksTwo = [
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/umerkazi/",
  },
  {
    title: "email",
    href: "mailto:umer@kazi.cc",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-0 pb-20">
      {/* Header */}
      <div className="w-full flex flex-row items-center justify-start py-8 gap-4 ml-8">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="hover:underline font-[300] text-md font-serif text-white/85"
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Content */}
      <div className="ml-8 space-y-8 font-serif text-white/85">
        <div>
          <h1 className="text-3xl font-medium text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-white/60">
            Last updated: December 7, 2025
          </p>
        </div>

        <div className="space-y-6 font-light">
          <section>
            <h2 className="text-xl font-medium text-white mb-3">Overview</h2>
            <p className="leading-relaxed">
              Mambo is a logic puzzle game with optional online leaderboards. We
              respect your privacy and collect only the minimum data necessary
              to provide leaderboard functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">
              Information We Collect
            </h2>
            <p className="leading-relaxed mb-3">
              When you use Mambo&apos;s leaderboard features, we collect and
              store the following information:
            </p>
            <p className="leading-relaxed mb-2">
              <span className="text-white">Profile Information:</span> Your
              chosen player name (e.g., &quot;SmartPlayer123&quot;), selected
              country, and country flag emoji. These are either auto-generated
              from your device settings or customized by you.
            </p>
            <p className="leading-relaxed mb-2">
              <span className="text-white">Game Performance Data:</span> Your
              puzzle completion times, daily challenge scores, monthly averages,
              and best times.
            </p>
            <p className="leading-relaxed">
              <span className="text-white">Anonymous Identifier:</span> A
              randomly generated anonymous user ID created by Firebase
              Authentication. This ID is not linked to any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">
              What We Don&apos;t Collect
            </h2>
            <p className="leading-relaxed">
              Mambo does not collect email addresses, phone numbers, real names,
              precise location data, or any other personally identifiable
              information. Analytics and advertising are explicitly disabled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">
              How We Use Your Information
            </h2>
            <p className="leading-relaxed">
              Your data is used solely to display leaderboards and track your
              game progress. We do not sell, share, or use your information for
              any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">
              Data Storage and Security
            </h2>
            <p className="leading-relaxed mb-3">
              Your data is stored securely using Google Firebase services. Game
              preferences are stored locally on your device.
            </p>
            <p className="leading-relaxed">
              Leaderboard data is retained for up to 30 days for daily
              challenges and 6 months for monthly rankings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">
              Your Rights and Account Deletion
            </h2>
            <p className="leading-relaxed">
              You can delete your account at any time from the Settings screen.
              This will permanently remove all your data from our servers,
              including your profile, leaderboard entries, and game history. A
              new anonymous account will be created for you to continue playing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">
              Third-Party Services
            </h2>
            <p className="leading-relaxed mb-3">
              Mambo uses Firebase (by Google) for authentication and database
              services. Firebase may collect limited technical information as
              described in their privacy policy:{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                className="text-white hover:underline"
              >
                firebase.google.com/support/privacy
              </a>
            </p>
            <p className="leading-relaxed">
              We do not use any analytics, advertising, or tracking services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">
              Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed">
              Mambo is suitable for users of all ages. We do not knowingly
              collect personal information from children. All accounts use
              anonymous authentication, and no personally identifiable
              information is required or collected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">
              Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this privacy policy from time to time. Any changes
              will be reflected by updating the &quot;Last updated&quot; date at
              the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">Contact</h2>
            <p className="leading-relaxed">
              If you have any questions about this privacy policy or wish to
              exercise your data rights, please contact us at{" "}
              <a
                href="mailto:umer@kazi.cc"
                className="text-white hover:underline"
              >
                umer@kazi.cc
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-full flex flex-row items-center justify-start gap-4 ml-8 mt-12">
        {linksTwo.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="hover:underline font-[300] text-md font-serif text-white/85 flex items-center gap-2"
            target="_blank"
          >
            <ArrowUpRight className="text-white/85 h-4 w-4" />
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
