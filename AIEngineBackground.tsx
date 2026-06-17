import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ArrowRight, 
  Sparkles, 
  Copy, 
  Check, 
  MessageSquare, 
  ChevronRight,
  Zap, 
  MousePointerClick,
  Send,
  HelpCircle
} from 'lucide-react';
import AIEngineBackground from './components/AIEngineBackground';
import InteractiveWorkflow from './components/InteractiveWorkflow';
import LeadDashboardMock from './components/LeadDashboardMock';
import MetricCard from './components/MetricCard';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Update progress bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
      
      if (window.scrollY > 150) {
        setShowScrollHint(false);
      } else {
        setShowScrollHint(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('babywahaj@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="relative min-h-screen text-brand-text font-sans selection:bg-brand-accent/25 selection:text-brand-accent pb-16">
      
      {/* Dynamic Animated Technical Grid Network Background */}
      <AIEngineBackground />

      {/* FIXED TOP PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-accent to-brand-accent-soft z-100 origin-left transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div className="max-w-[1000px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* HERO SECTION */}
        <header className="pt-24 md:pt-32 pb-16 relative overflow-hidden">
          {/* Subtle decoration lines representing a workflow graph */}
          <div className="absolute top-12 right-12 opacity-[0.05] pointer-events-none hidden md:block select-none font-mono text-[10px]">
            <pre>
{`[Webhook] ───────► [GPT-4o Scorer]
                         │
                         ├───────► [WhatsApp Outbound: 1.8s]
                         └───────► [HubSpot Sync]`}
            </pre>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-brand-accent/25 bg-brand-accent/10 backdrop-blur-md text-brand-accent font-mono text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm hover:bg-brand-accent/15 transition-all cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            AUTONOMOUS WORKFLOWS
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-medium text-4xl md:text-6xl text-brand-text tracking-tight leading-none uppercase font-black"
          >
            WAHAJ HUSSAIN
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subhead mt-6 text-base md:text-lg text-brand-text-muted max-w-[55ch] leading-relaxed"
          >
            I engineer high-performance, autonomous AI agent systems and unattended data pipelines. Specializing in advanced omnichannel lead orchestration, real-time CRM state syncing, and flawless automated WhatsApp communications for enterprise operations across the Gulf.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a 
              href="mailto:babywahaj@gmail.com"
              className="btn btn--primary flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-brand-accent bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/25 hover:scale-102 active:scale-98 transition-all cursor-pointer shadow-sm"
            >
              Contact Specialist
              <ArrowRight size={13} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </a>

            <button 
              onClick={copyEmailToClipboard}
              className="px-4 py-2.5 rounded-xl font-mono text-xs bg-brand-panel/40 hover:bg-brand-panel border border-brand-border-soft text-brand-text transition-all active:scale-98 cursor-pointer flex items-center gap-1.5"
            >
              {copiedEmail ? (
                <>
                  <Check size={13} className="text-emerald-600 animate-pulse" />
                  Request Copied!
                </>
              ) : (
                <>
                  <Copy size={13} className="text-brand-text-muted" />
                  Copy Intake Email
                </>
              )}
            </button>

            <a 
              href="https://www.linkedin.com/in/wahajhussain-ae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-mono text-xs bg-brand-panel/40 hover:bg-brand-panel border border-brand-border-soft text-brand-text transition-all active:scale-98"
            >
              <Linkedin size={13} className="text-sky-600" />
              LinkedIn Core
            </a>

            <a 
              href="https://github.com/wahajzaynn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-mono text-xs bg-brand-panel/40 hover:bg-brand-panel border border-brand-border-soft text-brand-text transition-all active:scale-98"
            >
              <Github size={13} className="text-brand-text" />
              OSS Repositories
            </a>
          </motion.div>

          {showScrollHint && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="mt-16 text-center text-xs font-mono text-brand-text-muted animate-bounce flex items-center justify-center gap-1.5"
            >
              <span>Scroll to Audit System Specs</span>
              <span>↓</span>
            </motion.div>
          )}
        </header>

        {/* METRICS & SHAPE PIPELINE */}
        <section className="py-12 border-t border-brand-border-soft relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] text-brand-accent font-bold uppercase tracking-wider">Enterprise Architecture Standard</span>
              <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                <span className="font-mono text-xs font-extrabold text-brand-text bg-brand-panel px-3 py-1.5 rounded-lg border border-brand-border-soft shadow-sm flex items-center gap-1">Omnichannel Ingest</span>
                <span className="text-brand-border font-bold">→</span>
                <span className="font-mono text-xs font-extrabold text-[#E85D2C] bg-orange-50 px-3 py-1.5 rounded-lg border border-brand-accent/20 shadow-sm flex items-center gap-1">Distributed Deep Reasoning</span>
                <span className="text-brand-border font-bold">→</span>
                <span className="font-mono text-xs font-extrabold text-[#2F6AED] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 shadow-sm flex items-center gap-1">Deterministic Outbound SLA</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-brand-text-muted max-w-sm leading-relaxed font-sans">
              All infrastructure pipelines map raw ingestion inputs to dynamic automated executions without human bottlenecks.
            </p>
          </div>
        </section>

        {/* MAIN CASE STUDY HEADER */}
        <section className="pt-8">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] uppercase tracking-wider font-bold text-brand-accent">ENTERPRISE SYSTEM PROFILE — AI SALES AGENT INSTANCE qaIQbWVnwVLYOCKj</span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-brand-text tracking-tight mt-1 uppercase font-black">
              AI Sales Employee — Unified Workflow
            </h2>
            <p className="mt-2 text-xs font-mono text-brand-text-muted">
              Current Release State: <span className="text-amber-500 font-extrabold">INACTIVE (BUILT BUT NOT PUBLISHED)</span> · Ready for live deployment.
            </p>
          </div>

          {/* MAIN GRID - Three Columns for the 3 Unified Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* MODULE 1: Lead Capture & Qualification */}
            <div className="p-6 md:p-8 rounded-2xl bg-brand-panel-2/20 backdrop-blur-sm border border-brand-border-soft shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent text-xs font-bold shrink-0">1</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-brand-accent">Module One</span>
                </div>
                <h4 className="font-display font-medium text-lg text-brand-text">Lead Capture & Qualification</h4>
                <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">
                  Catches incoming leads instantly from website forms or primary corporate email accounts. Instantly runs duplicate lookup algorithms before initiating processing to avoid double-engagement, ending on dynamic intent-qualification and custom lead scoring.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-border-soft/60">
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-brand-text-muted bg-brand-panel border border-brand-border/40">Ingestion Webhooks</span>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-brand-text-muted bg-brand-panel border border-brand-border/40">Duplicate Checker</span>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-[#E85D2C] bg-orange-50/70 border border-brand-accent/20">Gemini Scoring</span>
              </div>
            </div>

            {/* MODULE 2: Social & Messaging Channels */}
            <div className="p-6 md:p-8 rounded-2xl bg-brand-panel-2/20 backdrop-blur-sm border border-brand-border-soft shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent text-xs font-bold shrink-0">2</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-indigo-500">Module Two</span>
                </div>
                <h4 className="font-display font-medium text-lg text-brand-text">Social & Messaging Channels</h4>
                <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">
                  Handles live dialogues and incoming messages from WhatsApp, Instagram direct messages, and corporate Facebook channels simultaneously. Directs all interactions seamlessly into the central sales validation pipeline, standardizing input schemas.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-border-soft/60">
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-brand-text-muted bg-brand-panel border border-brand-border/40">WhatsApp Business</span>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-brand-text-muted bg-brand-panel border border-brand-border/40">Instagram DMs</span>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-[#2F6AED] bg-blue-50/70 border border-blue-100">Meta Gateways</span>
              </div>
            </div>

            {/* MODULE 3: AI Sales Agent */}
            <div className="p-6 md:p-8 rounded-2xl bg-brand-panel-2/20 backdrop-blur-sm border border-brand-border-soft shadow-sm space-y-4 flex flex-col justify-between animate-pulse-slow">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent text-xs font-bold shrink-0">3</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-emerald-600">Module Three</span>
                </div>
                <h4 className="font-display font-medium text-lg text-brand-text">AI Sales Agent & Handoff</h4>
                <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">
                  Deploys a unified, highly trained conversational agent across all web, email, WhatsApp, and social queues. Maintains state, locks records within corporate CRM systems (HubSpot/Pipedrive), and detects anger or limits to flag quick human takeover.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-border-soft/60">
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-brand-text-muted bg-brand-panel border border-brand-border/40">HubSpot Sync</span>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-brand-text-muted bg-brand-panel border border-brand-border/40">Unified Agent</span>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-emerald-600 bg-emerald-50/70 border border-emerald-100">Human Escalation</span>
              </div>
            </div>

          </div>

          {/* DYNAMIC WORKFLOW AGENT SHOWCASE - WIDESCREEN IM-SLIDE SECTION */}
          <div className="my-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
              <span className="font-mono text-[10.5px] uppercase tracking-wider font-extrabold text-brand-accent">ENTERPRISE CORE INFRASTRUCTURE MATRIX</span>
            </div>
            
            <div className="p-1 rounded-2xl bg-gradient-to-r from-brand-accent/10 via-amber-500/10 to-brand-accent/5 border border-brand-border-soft/85 shadow-lg">
              <InteractiveWorkflow />
            </div>
            
            <p className="mt-2 text-[10.5px] font-mono text-brand-text-muted text-center flex items-center justify-center gap-1.5">
              <MousePointerClick size={11} className="text-brand-accent" />
              <span>Interactive Trace Simulator: Click "Run Simulated Trace" to audit the 134-node automation live.</span>
            </p>
          </div>

          {/* DYNAMIC RESULTS SECTION */}
          <div className="my-12">
            <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-brand-text-muted block mb-3">SLA Metrics & Operational Yield</span>
            <div className="p-6 md:p-8 rounded-2xl bg-brand-accent/5 backdrop-blur-sm border border-brand-accent/20 shadow-md">
              <p className="text-sm md:text-base text-brand-text leading-relaxed font-sans mb-6 text-brand-text-muted">
                The automatic sales workflow operates without manual oversight, responding under <strong>2 minutes</strong>, ensuring high-quality company scoring, and giving business developers cold leads alerts instantly.
              </p>

              {/* Responsive counts up in viewport */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricCard target={350} label="Leads per week" />
                <MetricCard target={45} label="Auto-qualified" suffix="%" />
                <MetricCard target={2} label="Min Response" suffix=" m" />
                <MetricCard target={40} label="Hours Saved" suffix=" h" />
              </div>
            </div>
          </div>

          {/* SECOND CONTAINER GRID: LIVE INTAKE DEMO & STATS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-8">
            {/* Live Triage Ingest simulation (Span 7) */}
            <div className="lg:col-span-7">
              <LeadDashboardMock />
              <p className="mt-1.5 text-[10.5px] font-mono text-brand-text-muted text-center">
                Click any incoming card above to drill down into the extracted intelligence and custom replies.
              </p>
            </div>

            {/* Implementation specifications & tech (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="p-5 md:p-6 rounded-2xl bg-brand-panel-2/20 border border-brand-border-soft shadow-sm space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-brand-accent">Implementation Specifications</span>
                
                <ul className="space-y-2.5 text-xs md:text-sm text-brand-text list-none pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-0.5">•</span>
                    <span><strong>Integrated Channels:</strong> Web forms, WhatsApp Business API (Twilio/360dialog), Gmail parser, LinkedIn automated scrapers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-0.5">•</span>
                    <span><strong>Central Intelligence:</strong> Gemini API / GPT-4o with prompt chaining configurations optimizing scoring accuracy and formatting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-0.5">•</span>
                    <span><strong>CRM Sync System:</strong> HubSpot developer API syncing custom lead properties including company context, budgets, competitor alerts, and phone numbers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-0.5">•</span>
                    <span><strong>Predictive Accuracy:</strong> 92%+ validation rate on auto-qualified scoring categories based on live tests in UAE market.</span>
                  </li>
                </ul>
              </div>

              {/* Tech stack */}
              <div className="p-5 md:p-6 rounded-2xl bg-brand-panel-2/20 border border-brand-border-soft shadow-sm space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-brand-accent">Tech Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'n8n Workflow',
                    'GSM Gateway',
                    'GPT-4o',
                    'Google Workspace SDK',
                    'HubSpot API',
                    'PostgreSQL',
                    'Vite + React Core',
                    'Twilio WhatsApp',
                    'Cloud Run API Proxy'
                  ].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-brand-text bg-brand-panel-2 border border-brand-border/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* BIOGRAPHY SECTION */}
        <section className="py-12 border-t border-brand-border-soft mt-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div className="w-16 h-16 rounded-full bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center shrink-0 shadow">
              <Zap size={28} className="text-brand-accent" />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-display font-medium text-2xl tracking-tight text-brand-text uppercase font-bold">About Specialist</h3>
              <p className="text-sm md:text-base text-brand-text-muted leading-relaxed font-sans max-w-[70ch]">
                BSc Computer Science (final year) · accounting experience in a Dubai tax center · e-commerce operator across multiple platforms. I combine technical automation skills with real numbers-driven business operations to build systems that scale without headcount. Specializing in sales automation, content pipelines, and B2B outreach for Gulf region businesses.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-brand-border-soft flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <span className="text-brand-text-muted">© {new Date().getFullYear()} WAHAJ HUSSAIN. Gulf Scale Automation.</span>
          <div className="flex gap-4">
            <a href="mailto:babywahaj@gmail.com" className="hover:text-brand-accent transition-colors">Email</a>
            <span className="text-brand-border">•</span>
            <a href="https://www.linkedin.com/in/wahajhussain-ae" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">LinkedIn</a>
            <span className="text-brand-border">•</span>
            <a href="https://github.com/wahajzaynn" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">GitHub</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
