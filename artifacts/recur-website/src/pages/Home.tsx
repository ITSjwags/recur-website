import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { 
  Activity, ShieldAlert, History, RefreshCcw, 
  ArrowRight, CheckCircle2, Clock, Dumbbell,
  CalendarDays
} from "lucide-react";
import { Link } from "wouter";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const STAGGER_CHILDREN = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  useEffect(() => {
    document.title = "Recur | Strength training that adapts to your history";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Strength training that adapts to your history. Adapts to breaks. Works around pain. Builds momentum that lasts.");
    }
  }, []);

  return (
    <main className="min-h-[100dvh] bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-semibold text-2xl tracking-tight text-foreground flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <RefreshCcw className="w-4 h-4 text-primary-foreground" />
            </div>
            Recur
          </div>
          <a
            href="#download"
            className="text-sm font-medium px-6 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
            data-testid="link-nav-download"
          >
            Get the app
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={STAGGER_CHILDREN}
          >
            <motion.h1 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-semibold tracking-tighter text-foreground mb-6 leading-[1.05]"
            >
              Stop starting over.
            </motion.h1>
            <motion.p 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-xl md:text-3xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            >
              Strength training that adapts to your history.
            </motion.p>
            <motion.div 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#download"
                className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-medium hover:bg-primary/90 transition-all active:scale-95 w-full sm:w-auto shadow-lg shadow-primary/20"
                data-testid="button-hero-download"
              >
                Download Recur
              </a>
              <p className="text-sm text-muted-foreground sm:ml-4 font-medium tracking-wide uppercase">
                iOS & Android
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Prop Statement */}
      <section className="py-20 bg-card px-6 border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium leading-tight text-foreground"
          >
            Adapts to breaks. Works around pain. Builds momentum that lasts.
          </motion.h2>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-2">
                <History className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Progress you don't have to reset</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Life happens. When you miss a week (or a month), Recur doesn't guilt you or send you back to week one. It assesses where you are and adjusts your plan to rebuild safely.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-2">
                <RefreshCcw className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Adapts to breaks automatically</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No streak counters. No broken rings. Our algorithm intelligently scales back volume and intensity based on how long you've been away, making the return frictionless.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-2">
                <ShieldAlert className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Works around pain, not through it</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Shoulder acting up? Knee feeling tight? Tell the app. It dynamically swaps exercises to protect sensitive areas while still delivering an effective stimulus.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-2">
                <Dumbbell className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Built for home workouts with dumbbells</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No complex gym setups required. Recur is optimized for minimal equipment, making it easier to fit a session into a chaotic schedule.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image / Lifestyle Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] overflow-hidden relative h-[500px] md:h-[700px]"
          >
            <div className="absolute inset-0 bg-foreground/20 z-10" />
            <img 
              src="/home-workout.jpg" 
              alt="Person working out calmly at home" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
              <div className="bg-background/95 backdrop-blur-xl p-8 md:p-12 rounded-3xl max-w-xl text-center border border-white/10 shadow-2xl">
                <h3 className="text-3xl font-semibold mb-4">Sustainable. Durable. Real.</h3>
                <p className="text-lg text-muted-foreground">
                  The best training program isn't the one that pushes you the hardest. It's the one that makes it easier to come back tomorrow.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Social Proof Section */}
      <section className="py-32 bg-accent/10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-8">
              <div className="flex gap-1 text-primary">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-2xl md:text-4xl font-medium leading-normal text-foreground mb-12">
              "Finally, an app that understands real life happens. I missed three weeks and it just calmly adjusted my plan. No guilt, no starting from zero. It's like having a coach who actually gets it."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-xl">
                S
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg">Sarah T.</p>
                <p className="text-muted-foreground">Training with Recur for 6 months</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-32 bg-foreground text-background px-6 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-5 pointer-events-none">
          <RefreshCcw className="w-full h-full text-background" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight">
              Progress you don't<br />have to reset.
            </h2>
            <p className="text-xl md:text-2xl text-background/70 mb-16 max-w-2xl mx-auto font-light">
              Start building durable momentum today. Free to download.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                className="flex items-center gap-4 bg-background text-foreground px-8 py-5 rounded-2xl font-medium hover:bg-background/90 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                data-testid="button-download-ios"
              >
                <SiApple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs leading-none mb-1.5 opacity-70">Download on the</div>
                  <div className="text-xl leading-none font-semibold">App Store</div>
                </div>
              </button>
              <button 
                className="flex items-center gap-4 bg-background text-foreground px-8 py-5 rounded-2xl font-medium hover:bg-background/90 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                data-testid="button-download-android"
              >
                <SiGoogleplay className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs leading-none mb-1.5 opacity-70">GET IT ON</div>
                  <div className="text-xl leading-none font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border px-6 bg-card">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center">
              <RefreshCcw className="w-3 h-3 text-primary" />
            </div>
            <div className="font-semibold text-lg text-foreground">Recur</div>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Recur. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
