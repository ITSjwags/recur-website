import { useEffect } from "react";
import { motion } from "framer-motion";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { History, RefreshCcw, ShieldCheck, Dumbbell } from "lucide-react";
import recurLogoLight from "@assets/recur-white_1775218113202.png";
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
    body: "Miss a week because of work, travel, or just life? Recur doesn't send you back to square one. It figures out where you are and eases you back in from there.",
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "No guilt when you miss a day",
    body: "No streaks. No app shaming you for missing sessions. When you come back — whether it's been 10 days or 3 months — it adjusts quietly and you just get on with it.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Works around pain, not through it",
    body: "That shoulder thing from a few years back. The knee that flares up. Tell the app and it swaps to something that doesn't aggravate it — so you can still show up.",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Works with what you have at home",
    body: "No gym membership. No expensive equipment. Just a pair of dumbbells and whatever time you can carve out — 20 minutes or 45, it works.",
  },
];

const contrast = [
  { other: "Makes you feel bad for missing days", recur: "Adjusts and moves on" },
  { other: "Streak counters and guilt trips", recur: "No streaks, no pressure" },
  { other: '"Start from week one again"', recur: "Eases you back in from where you are" },
  { other: "Push through the pain", recur: "Work around it instead" },
  { other: "Needs a gym and a rigid schedule", recur: "Works at home, around your week" },
];

const forWho = [
  "You've downloaded fitness apps before and stopped using them",
  "You have an old injury that flares up occasionally",
  "Work, kids, or travel make consistent exercise hard",
  "You just want to feel better and stay active — not train for a competition",
  "You've started and stopped enough times to be skeptical of yet another app",
];

export default function Home() {
  useEffect(() => {
    document.title = "Recur | Consistency without flare-ups";
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
            href="#download"
            className="text-sm font-semibold px-5 py-2 rounded-full bg-foreground text-background hover:bg-foreground/85 transition-colors"
            data-testid="link-nav-download"
          >
            Get the app
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex flex-col items-start"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(3.5rem,10vw,8rem)] font-semibold tracking-tighter leading-[1.0] text-foreground mb-6"
            >
              Stop starting<br />over.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Strength training that adapts to your history.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#download"
                className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/85 transition-all active:scale-95 shadow-lg shadow-primary/25"
                data-testid="button-hero-download"
              >
                <SiApple className="w-5 h-5" />
                Download for iOS
              </a>
              <a
                href="#download"
                className="flex items-center gap-3 border border-border text-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/5 transition-all active:scale-95"
                data-testid="button-hero-android"
              >
                <SiGoogleplay className="w-4 h-4" />
                Download for Android
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bold value prop band */}
      <section className="bg-foreground text-background py-20 px-6">
        <div className="max-w-5xl mx-auto">
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
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
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
              Built for people with<br />a history.
            </h2>
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-col gap-4 pt-1 md:pt-10"
          >
            {forWho.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 text-base text-foreground leading-relaxed"
              >
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-card border-y border-border/60">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-16"
          >
            What Recur does differently
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

      {/* Contrast table */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-12">
              A different relationship with training
            </p>
            <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border">
              <div className="bg-muted/40 px-6 py-4 border-b border-border">
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Most apps</p>
              </div>
              <div className="bg-primary px-6 py-4 border-b border-primary/60">
                <p className="text-xs font-semibold tracking-wider uppercase text-primary-foreground/80">Recur</p>
              </div>
              {contrast.map((row, i) => (
                <div key={i} className="contents">
                  <div className={`px-6 py-5 flex items-center ${i < contrast.length - 1 ? "border-b border-border" : ""} bg-muted/20`}>
                    <p className="text-sm text-muted-foreground line-through decoration-muted-foreground/40">{row.other}</p>
                  </div>
                  <div className={`px-6 py-5 flex items-center ${i < contrast.length - 1 ? "border-b border-primary/20" : ""} bg-primary/5`}>
                    <p className="text-sm font-medium text-foreground">{row.recur}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lifestyle image block */}
      <section className="py-10 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
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
                  Welcome back is always the answer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-32 px-6 bg-foreground text-background relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <img src={recurLogoLight} alt="Recur" className="h-8 w-auto mx-auto opacity-90" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              Consistency without<br />flare-ups.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-background/60 mb-14 max-w-md mx-auto leading-relaxed">
              For people who just want to stay active — without the guilt, the injuries, or starting over. Free to download.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="flex items-center gap-4 bg-background text-foreground px-8 py-4 rounded-2xl font-medium hover:bg-background/90 transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
                data-testid="button-download-ios"
              >
                <SiApple className="w-7 h-7 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[11px] leading-none mb-1 opacity-60 font-medium">Download on the</div>
                  <div className="text-lg leading-none font-semibold">App Store</div>
                </div>
              </button>
              <button
                className="flex items-center gap-4 bg-white/10 border border-white/20 text-background px-8 py-4 rounded-2xl font-medium hover:bg-white/15 transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
                data-testid="button-download-android"
              >
                <SiGoogleplay className="w-7 h-7 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[11px] leading-none mb-1 opacity-60 font-medium">GET IT ON</div>
                  <div className="text-lg leading-none font-semibold">Google Play</div>
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={recurIcon} alt="Recur icon" className="w-6 h-6 rounded-lg" />
            <img src={recurLogoDark} alt="Recur" className="h-4 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Recur. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
