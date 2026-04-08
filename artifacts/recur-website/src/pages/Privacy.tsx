import { useEffect } from "react";
import { Link } from "wouter";
import recurLogoDark from "@assets/recur_1775218108653.png";
import recurIcon from "@assets/icon_1775218102896.png";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Recur";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src={recurIcon} alt="Recur icon" className="w-8 h-8 rounded-xl" />
            <img src={recurLogoDark} alt="Recur" className="h-5 w-auto dark:invert" />
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back home
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: January 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Recur, we take your privacy seriously. This policy describes what personal information we collect and how we use it.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us, such as when you sign up for our waitlist, create an account, or contact us for support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Waitlist Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you join our waitlist, we collect your email address. We use this solely to notify you about Recur's launch and updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">When Recur launches, we may collect:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Name and email address</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Workout preferences and history</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Information about injuries or pain points you choose to share</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Device information for app functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Provide, maintain, and improve our services</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Personalize your workout experience</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Send you updates about Recur (you can opt out anytime)</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Respond to your comments and questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Access the personal information we hold about you</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Request correction of inaccurate information</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Request deletion of your information</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@recur.fit" className="text-primary hover:underline">hello@recur.fit</a>.
            </p>
          </section>
        </div>
      </div>

      <footer className="py-10 border-t border-border px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={recurIcon} alt="Recur icon" className="w-6 h-6 rounded-lg" />
            <img src={recurLogoDark} alt="Recur" className="h-4 w-auto dark:invert" />
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Recur. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
