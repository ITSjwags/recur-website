import { useEffect } from "react";
import { Link } from "wouter";
import recurLogoDark from "@assets/recur_1775218108653.png";
import recurIcon from "@assets/icon_1775218102896.png";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Recur";
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
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: January 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to Recur. By using our service, you agree to these terms. Please read them carefully.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Using Our Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recur provides fitness content and workout recommendations. By using Recur, you acknowledge that:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>You are at least 18 years old or have parental consent</li>
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>You will use the service responsibly</li>
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>You understand that Recur is not a substitute for professional medical advice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Health Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Important:</strong> Recur is designed to help you with strength training, but it is not a replacement for professional medical advice. Always consult with a healthcare provider before starting any new exercise program, especially if you have existing health conditions or injuries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Listen to your body. If you experience pain, dizziness, or discomfort during exercise, stop immediately and seek medical attention if needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">When you create an account with Recur, you are responsible for:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>Maintaining the security of your account</li>
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>All activities that occur under your account</li>
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>Providing accurate information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>Use Recur for any unlawful purpose</li>
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>Share your account with others</li>
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>Attempt to access other users' accounts</li>
              <li className="flex items-baseline gap-2"><span className="text-primary">•</span>Interfere with the proper functioning of the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Recur service, including its content, features, and functionality, is owned by Recur and protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Recur is provided "as is" without warranties of any kind. We are not liable for any injuries, damages, or losses resulting from your use of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these terms from time to time. We will notify you of any significant changes via email or through the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about these Terms? Contact us at{" "}
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
