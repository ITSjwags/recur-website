import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { History, Zap, ShieldCheck, Home as HomeIcon } from "lucide-react";
import recurLogoDark from "@assets/recur_1775218108653.png";
import recurIcon from "@assets/icon_1775218102896.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const features = [
  {
    icon: <History className="w-6 h-6" />,
    title: "Progress you don't have to reset",
    body: "It learns from your actual sessions: how hard you pushed, what you swapped, how your body responded. Then it builds from there. Take a couple weeks off? We automatically ease you back in. No punishment, no starting over.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Works around pain, not through it",
    body: "Flag an ache, we route around it. Shoulders, knees, back. The app learns what bothers you and keeps you moving without aggravating it.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Just tap start",
    body: "No planning, no decision fatigue. We generate your workout based on what you need today, so the hardest part is just showing up.",
  },
  {
    icon: <HomeIcon className="w-6 h-6" />,
    title: "Built for home workouts",
    body: "Dumbbells or bodyweight, that's all you need. No gym, no barbell, no complicated setup. Real strength training built around what you already have at home.",
  },
];


const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(false);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "waitlist", email }),
      });
      setSubmitted(true);
    } catch {
      setFormError(true);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "Recur | Back to it. Every time.";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Strength training for adults who train at home and want to stay consistent without getting hurt or burned out. Adapts to breaks, works around pain, builds momentum that lasts.");
    }
  }, []);

  return (
    <main className="min-h-[100dvh] bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={recurIcon} alt="Recur icon" className="w-8 h-8 rounded-xl" />
            <img src={recurLogoDark} alt="Recur" className="h-5 w-auto" />
          </div>
          <a
            href="#waitlist"
            className="text-sm font-semibold px-5 py-2 rounded-full bg-foreground text-background hover:bg-foreground/85 transition-colors"
            data-testid="link-nav-waitlist"
          >
            Join waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-foreground">
        <img
          src="/lifestyle-hero.png?v=2"
          alt="Person doing home workout"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center min-h-[90vh]">
          <div className="w-full md:w-1/2">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="flex flex-col items-start pt-24 pb-20 md:py-0"
            >
              <motion.h1
                variants={fadeUp}
                className="text-[clamp(3.2rem,7vw,6.5rem)] font-semibold tracking-tighter leading-[1.0] text-foreground mb-6"
              >
                Stop starting<br />over.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-muted-foreground max-w-md mb-10 leading-relaxed"
              >
                Strength training that adapts to your history.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a
                  href="#waitlist"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-foreground/85 transition-all active:scale-95 whitespace-nowrap"
                  data-testid="button-hero-waitlist"
                >
                  Get early access
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bold value prop band */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
          >
            Adapts to breaks.<br />
            Works around pain.<br />
            <span className="text-primary">Builds momentum that lasts.</span>
          </motion.p>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Who it's for
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug tracking-tight">
              Built for bodies<br />with history.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed pt-1 md:pt-10"
          >
            You've trained before. You've stopped before. Maybe you've got an old injury that flares up, or a schedule that makes consistency hard.{" "}
            <strong className="text-foreground font-semibold">Recur is for people who know that perfect weeks don't exist</strong> and want an app that gets it.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-card border-y border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-16"
          >
            A different relationship with training
          </motion.p>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-14">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle image block */}
      <section className="py-10 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden relative bg-foreground"
          >
            <img
              src="/lifestyle.png"
              alt="Person working out calmly at home with dumbbells"
              className="w-full h-[420px] md:h-[560px] object-cover opacity-50 mix-blend-luminosity"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex items-end p-10 md:p-16">
              <div className="max-w-lg">
                <p className="text-3xl md:text-5xl font-semibold text-background leading-tight tracking-tight">
                  Show up when you can. It's enough.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              Back to it.<br />Every time.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-background/60 mb-12 max-w-md mx-auto leading-relaxed">
              Recur is launching soon. Drop your email and we'll let you know when it's ready.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-background/80 text-lg font-medium"
              >
                You're on the list. We'll be in touch.
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                name="waitlist"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
              >
                <input type="hidden" name="form-name" value="waitlist" />
                <input type="hidden" name="bot-field" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 text-sm"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3.5 rounded-full bg-background text-foreground text-sm font-semibold hover:bg-background/90 transition-all active:scale-95 disabled:opacity-60 whitespace-nowrap"
                  data-testid="button-waitlist-submit"
                >
                  {submitting ? "Joining…" : "Join waitlist"}
                </button>
              </motion.form>
            )}

            {formError && (
              <p className="mt-4 text-sm text-background/50">
                Something went wrong. Try again or email us directly.
              </p>
            )}

            <motion.p variants={fadeUp} className="mt-6 text-xs text-background/30">
              No spam, ever.{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-background/50 transition-colors">
                Privacy Policy
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={recurIcon} alt="Recur icon" className="w-6 h-6 rounded-lg" />
            <img src={recurLogoDark} alt="Recur" className="h-4 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Recur. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
