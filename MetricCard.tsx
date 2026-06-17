import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Sparkles, 
  MessageSquare, 
  Database, 
  Smartphone, 
  Globe, 
  Mail,
  BellRing,
  Search,
  Users,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

interface LogMessage {
  id: string;
  text: string;
  type: 'info' | 'success' | 'warn' | 'action';
  time: string;
}

export default function InteractiveWorkflow() {
  const [selectedChannel, setSelectedChannel] = useState<'form' | 'email' | 'whatsapp' | 'instagram' | 'facebook'>('whatsapp');
  const [activeStep, setActiveStep] = useState<string>('');
  const [currentStatusText, setCurrentStatusText] = useState("Workflow inactive (Pending publication). Choose a source & run simulated trace.");
  const [simulationRunning, setSimulationRunning] = useState(false);
  
  // Real-time animated execution output counter metrics
  const [messagesReceived, setMessagesReceived] = useState(1348);
  const [repliesSent, setRepliesSent] = useState(1014);
  const [leadsAnalyzed, setLeadsAnalyzed] = useState(492);
  const [handoffsDispatched, setHandoffsDispatched] = useState(84);

  const [logs, setLogs] = useState<LogMessage[]>([
    { id: '1', text: 'System standing by. Linked to AI Sales Agent instance qaIQbWVnwVLYOCKj.', type: 'info', time: '14:41:23' },
    { id: '2', text: 'Ready to receive inputs from all 5 commercial gateways.', type: 'info', time: '14:41:24' }
  ]);

  const addLog = (text: string, type: 'info' | 'success' | 'warn' | 'action') => {
    const time = new Date().toTimeString().split(' ')[0];
    setLogs(prev => [
      { id: Math.random().toString(), text, type, time },
      ...prev.slice(0, 8)
    ]);
  };

  const handleRunSimulation = async () => {
    if (simulationRunning) return;
    setSimulationRunning(true);
    setLogs([]);

    // 1. INGESTION
    setActiveStep('ingest');
    setCurrentStatusText(`Module 1/2: Ingesting active webhook payload from raw channel: [${selectedChannel.toUpperCase()}]`);
    addLog(`Inbound webhook triggered via ${selectedChannel.toUpperCase()} listener nodes.`, 'info');
    
    // Dynamically increment messages got
    setMessagesReceived(prev => prev + Math.floor(Math.random() * 5) + 3);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 2. DUPLICATE CHECK
    setActiveStep('duplicate');
    setCurrentStatusText("Module 1: Running Duplicates Check. Scanning HubSpot records to avoid repeating outreach...");
    addLog("Searching past CRM contacts for match...", "info");
    await new Promise(resolve => setTimeout(resolve, 1300));
    addLog("No active duplicates detected. Proceeding safely.", "success");
    await new Promise(resolve => setTimeout(resolve, 600));

    // 3. QUALIFICATION
    setActiveStep('score');
    setCurrentStatusText("Module 1: Qualifies the profile. Scraping domains & executing commercial scoring...");
    addLog("Evaluating buyer intent using Gemini core metrics...", "info");
    
    // Dynamically increment leads qualified
    setLeadsAnalyzed(prev => prev + 1);
    await new Promise(resolve => setTimeout(resolve, 1400));
    addLog("Lead scored to high-priority category: 94/100 Intent.", "success");
    await new Promise(resolve => setTimeout(resolve, 600));

    // 4. CRM ROUTING
    setActiveStep('crm');
    setCurrentStatusText("Module 3: Automatically syncing CRM details. Creating contact thread on HubSpot...");
    addLog("Inserting lead specifications & intent scoring into HubSpot.", "action");
    await new Promise(resolve => setTimeout(resolve, 1400));
    addLog("CRM synced perfectly. Record status: High-priority.", "success");
    await new Promise(resolve => setTimeout(resolve, 600));

    // 5. AI OUTREACH
    setActiveStep('agent');
    setCurrentStatusText(`Module 3: Unified AI Sales Agent taking charge of communication back through ${selectedChannel.toUpperCase()}`);
    addLog(`AI Core engaging client on ${selectedChannel.toUpperCase()} with catalog info.`, "action");
    
    // Dynamically increment AI sent replies count
    setRepliesSent(prev => prev + Math.floor(Math.random() * 4) + 2);
    await new Promise(resolve => setTimeout(resolve, 1800));
    addLog("Client asked: 'Do you offer customized enterprise setups?'", "info");
    await new Promise(resolve => setTimeout(resolve, 1000));
    addLog(`AI responded intelligently according to sales knowledge book.`, "success");
    await new Promise(resolve => setTimeout(resolve, 1200));

    // 6. HUMAN ESCALATE
    setActiveStep('escalate');
    setCurrentStatusText("Module 3: Complex inquiry or closure signal caught. Invoking escalate hand-off...");
    addLog("Detecting client request for direct pricing spreadsheet.", "info");
    
    // Dynamically increment live handoffs count
    setHandoffsDispatched(prev => prev + 1);
    await new Promise(resolve => setTimeout(resolve, 600));
    addLog("Direct human dispatch triggered. Slack notification pushed to representative in 1.83s flat.", "warn");
    await new Promise(resolve => setTimeout(resolve, 1500));

    // COMPLETE
    setActiveStep('completed');
    setCurrentStatusText("Trace Complete. AI Sales Agent executed all 3 modules unattended perfectly.");
    addLog("Audit loop terminated. Standby.", "info");
    setSimulationRunning(false);
  };

  return (
    <div className="w-full bg-brand-panel/30 rounded-2xl p-4 md:p-6 border border-brand-border-soft flex flex-col gap-6 select-none shadow">
      
      {/* HUD Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/20 text-[9.5px] font-mono font-bold text-brand-accent uppercase tracking-wider">AI SALES AGENT PROTOCOLS</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[9.5px] font-mono font-bold text-amber-600">ID: qaIQbWVnwVLYOCKj</span>
            <span className="text-brand-text-muted font-mono text-[10px] uppercase">● CURRENT STATE: INACTIVE (Ready)</span>
          </div>
          <h4 className="font-display font-bold text-brand-text text-lg md:text-xl mt-1 uppercase tracking-tight">AI Sales Agent Flow Simulator</h4>
          <p className="font-sans text-xs text-brand-text-muted mt-0.5">Explore exactly how the 3-module unified sales employee operates in real-time</p>
        </div>

        {/* Trigger controls */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex bg-brand-panel border border-brand-border rounded-lg p-1">
            {(['whatsapp', 'instagram', 'facebook', 'form', 'email'] as const).map((ch) => (
              <button
                key={ch}
                onClick={() => !simulationRunning && setSelectedChannel(ch)}
                disabled={simulationRunning}
                className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                  selectedChannel === ch 
                    ? 'bg-brand-accent text-white shadow-sm' 
                    : 'text-brand-text-muted hover:text-brand-text cursor-pointer'
                } disabled:opacity-50`}
              >
                {ch.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={simulationRunning}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-md ${
              simulationRunning 
                ? 'bg-brand-border text-brand-text-muted cursor-not-allowed'
                : 'bg-brand-accent text-white hover:bg-brand-accent/90 border border-brand-accent/30 hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {simulationRunning ? (
              <>
                <RefreshCw size={13} className="animate-spin" />
                Auditing Pipeline...
              </>
            ) : (
              <>
                <Play size={13} className="fill-current" />
                Run Simulated Trace
              </>
            )}
          </button>
        </div>
      </div>

      {/* Dynamic Real-time Execution Statistics dashboard explaining Got Messages, Sent Leads & Details */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#181714] border border-brand-accent/15 p-4 rounded-xl text-white shadow-inner">
        <div className="space-y-1">
          <span className="text-[9px] font-mono text-amber-500 font-extrabold uppercase tracking-wide block">Messages Ingested (Got)</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-display font-black text-brand-text pr-1">
              {messagesReceived.toLocaleString()}
            </span>
            <span className="text-[10px] text-emerald-400 font-mono font-bold font-semibold animate-pulse">+Raw</span>
          </div>
          <p className="text-[9.5px] text-stone-400 leading-tight">Total raw inbound customer messages ingested and decoded</p>
        </div>

        <div className="space-y-1 border-l border-white/5 pl-4">
          <span className="text-[9px] font-mono text-indigo-400 font-extrabold uppercase tracking-wide block">AI Sent / Replies</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-display font-black text-brand-text pr-1">
              {repliesSent.toLocaleString()}
            </span>
            <span className="text-[9px] text-[#E85D2C] font-bold">1.8s SLA</span>
          </div>
          <p className="text-[9.5px] text-stone-400 leading-tight">Personalized conversations designed and sent autonomously</p>
        </div>

        <div className="space-y-1 border-l border-white/5 pl-4">
          <span className="text-[9px] font-mono text-brand-accent font-extrabold uppercase tracking-wide block">Leads Qualified</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-display font-black text-brand-text pr-1">
              {leadsAnalyzed.toLocaleString()}
            </span>
            <span className="text-[9px] text-purple-400 font-bold">HubSpot CRM</span>
          </div>
          <p className="text-[9.5px] text-stone-400 leading-tight">High-intent buyer profiles classified and synced to HubSpot</p>
        </div>

        <div className="space-y-1 border-l border-white/5 pl-4">
          <span className="text-[9px] font-mono text-purple-400 font-extrabold uppercase tracking-wide block font-semibold">Active Escalations</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-display font-black text-brand-text">
              {handoffsDispatched}
            </span>
            <span className="text-[9px] text-amber-500 font-bold ml-1.5">Slack push</span>
          </div>
          <p className="text-[9.5px] text-stone-400 leading-tight">In-depth custom specs and quotes passed off to humans</p>
        </div>
      </div>

      {/* Grid of the 3 Modules showing the clean logical flow */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        
        {/* Module 1 Frame */}
        <div className={`p-5 rounded-2xl bg-[#FCFBF8] border transition-all duration-300 relative ${
          activeStep === 'ingest' || activeStep === 'duplicate' || activeStep === 'score'
            ? 'border-brand-accent/40 shadow bg-white' 
            : 'border-brand-border/40'
        }`}>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-brand-accent/75 font-semibold">MODULE 1</div>
          <span className="text-[10px] font-mono font-bold uppercase text-brand-accent block mb-1">Lead Capture & Qualify</span>
          <h5 className="font-display font-medium text-brand-text text-sm mb-3">Inbound Ingest Pipeline</h5>
          
          <div className="space-y-4">
            
            {/* INBOUND TRIGGERS */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep === 'ingest'
                ? 'bg-amber-500/5 border-amber-500/35 ring-2 ring-amber-500/10'
                : 'bg-brand-panel/30 border-brand-border-soft'
            }`}>
              <div className="flex items-center gap-2 mb-1.5">
                {selectedChannel === 'form' ? <Globe size={13} className="text-brand-accent" /> : <Mail size={13} className="text-brand-accent" />}
                <span className="font-mono text-[10.5px] font-bold text-brand-text">1A. Form / Email Listener</span>
              </div>
              <p className="text-[10px] text-brand-text-muted leading-relaxed">Catches incoming leads from CRM, websites, or email inboxes instantly.</p>
              {activeStep === 'ingest' && (selectedChannel === 'form' || selectedChannel === 'email') && (
                <div className="mt-2 text-[9px] font-mono text-amber-600 font-extrabold animate-pulse">● CAPTURED NEW INBOUND LEAD GATEWAY</div>
              )}
            </div>

            {/* DUPLICATE CHECK NODE */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep === 'duplicate'
                ? 'bg-brand-accent/5 border-brand-accent/35 ring-2 ring-brand-accent/10'
                : 'bg-brand-panel/30 border-brand-border-soft'
            }`}>
              <div className="flex items-center gap-2 mb-1.5">
                <Search size={13} className="text-blue-500" />
                <span className="font-mono text-[10.5px] font-bold text-brand-text">1B. CRM Duplicates Filter</span>
              </div>
              <p className="text-[10px] text-brand-text-muted leading-relaxed">Runs rapid search to ensure we do not message/call the same lead twice.</p>
              {activeStep === 'duplicate' && (
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  <span className="text-[9px] font-mono text-blue-600 font-semibold">Comparing database hashes...</span>
                </div>
              )}
            </div>

            {/* QUALIFICATION SCORING NODE */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep === 'score'
                ? 'bg-brand-accent/5 border-brand-accent/35 ring-2 ring-brand-accent/10'
                : 'bg-brand-panel/30 border-brand-border-soft'
            }`}>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles size={13} className="text-amber-500" />
                <span className="font-mono text-[10.5px] font-bold text-brand-text">1C. Gemini Qualification</span>
              </div>
              <p className="text-[10px] text-brand-text-muted leading-relaxed">Scores leads automatically by querying domains, roles, and intents.</p>
              {activeStep === 'score' && (
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                  <span className="text-[9px] font-mono text-amber-600 font-semibold">Extracting commercial value...</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Module 2 Frame (Consolidated Social Gateway, Redundant Single Boxes Removed) */}
        <div className={`p-5 rounded-2xl bg-[#FCFBF8] border transition-all duration-300 relative ${
          activeStep === 'ingest' && (selectedChannel === 'whatsapp' || selectedChannel === 'instagram' || selectedChannel === 'facebook')
            ? 'border-indigo-400/40 shadow bg-white' 
            : 'border-brand-border/40'
        }`}>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-indigo-500/75 font-semibold">MODULE 2</div>
          <span className="text-[10px] font-mono font-bold uppercase text-indigo-500 block mb-1">Corporate Social Hub</span>
          <h5 className="font-display font-medium text-brand-text text-sm mb-3">Omnichannel Social Gateway</h5>
          
          <div className="space-y-4">
            
            {/* CONSOLIDATED OMNICHANNEL GATEWAY */}
            <div className={`p-3.5 rounded-xl border transition-all h-full flex flex-col justify-between ${
              activeStep === 'ingest' && (selectedChannel === 'whatsapp' || selectedChannel === 'instagram' || selectedChannel === 'facebook')
                ? 'bg-indigo-500/5 border-indigo-500/35 ring-2 ring-indigo-500/10'
                : 'bg-brand-panel/30 border-brand-border-soft'
            }`}>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <Smartphone size={15} className="text-indigo-500" />
                  <span className="font-mono text-[10.5px] font-bold text-brand-text uppercase">Meta API Stream Core</span>
                </div>
                <p className="text-[10px] text-brand-text-muted leading-relaxed">
                  Consolidated socket ingestion handling live Meta sales packets. Instantly processes live incoming chats, direct comments, and brand story responses seamlessly without maintaining multiple separate channel adapters.
                </p>
              </div>

              {/* Dynamic current routing indicator */}
              <div className="mt-4 pt-3 border-t border-brand-border-soft/60 space-y-1.5">
                <span className="font-mono text-[8px] uppercase tracking-wider text-brand-text-muted block">Selected Channel Adapter:</span>
                <div className="p-2 rounded bg-white border border-brand-border/40 flex items-center justify-between text-[10px] font-mono">
                  <span className="capitalize font-bold text-indigo-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    {selectedChannel} Stream active
                  </span>
                  <span className="text-[8px] text-stone-400 font-mono">TLS 1.3 Encryption</span>
                </div>

                {activeStep === 'ingest' && (selectedChannel === 'whatsapp' || selectedChannel === 'instagram' || selectedChannel === 'facebook') && (
                  <motion.div 
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-1 px-2 rounded bg-emerald-50 text-emerald-800 text-[8.5px] font-mono font-bold flex items-center gap-1 mt-1"
                  >
                    <CheckCircle2 size={10} className="text-emerald-500 animate-bounce" />
                    LIVE SOCIAL PAYLOAD ACQUIRED
                  </motion.div>
                )}
              </div>
            </div>

            {/* DIRECT TELEPHONE CALL INGESTION */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep === 'ingest' && selectedChannel === 'facebook'
                ? 'bg-blue-500/5 border-blue-500/35 ring-2 ring-blue-500/10'
                : 'bg-brand-panel/30 border-brand-border-soft'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare size={13} className="text-indigo-600" />
                <span className="font-mono text-[10.5px] font-bold text-brand-text">Facebook Messenger Gateway</span>
              </div>
              <p className="text-[10px] text-brand-text-muted leading-relaxed">Decodes live corporate thread chats and pushes them directly down the sales verification flow.</p>
              {activeStep === 'ingest' && selectedChannel === 'facebook' && (
                <div className="mt-2 text-[9px] font-mono text-indigo-600 font-extrabold animate-pulse">● FB MESSENGER EVENT SECURED</div>
              )}
            </div>

          </div>
        </div>

        {/* Module 3 Frame */}
        <div className={`p-5 rounded-2xl bg-[#FCFBF8] border transition-all duration-300 relative ${
          activeStep === 'crm' || activeStep === 'agent' || activeStep === 'escalate'
            ? 'border-emerald-500/40 shadow bg-white' 
            : 'border-brand-border/40'
        }`}>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-emerald-600/75 font-semibold">MODULE 3</div>
          <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 block mb-1">AI Agent & CRM Core</span>
          <h5 className="font-display font-medium text-brand-text text-sm mb-3">Unified Sales Operator</h5>
          
          <div className="space-y-4">
            
            {/* CRM SYNC */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep === 'crm'
                ? 'bg-[#E85D2C]/5 border-[#E85D2C]/30 ring-2 ring-[#E85D2C]/10'
                : 'bg-brand-panel/30 border-brand-border-soft'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Database size={13} className="text-[#E85D2C]" />
                <span className="font-mono text-[10.5px] font-bold text-brand-text">3A. Real-time CRM Sync</span>
              </div>
              <p className="text-[10px] text-brand-text-muted leading-relaxed">Updates HubSpot pipeline instantly. Allocates deals matching trace results.</p>
              {activeStep === 'crm' && (
                <div className="mt-1.5 flex items-center gap-1">
                  <span className="w-1 h-3 bg-[#E85D2C] animate-pulse rounded" />
                  <span className="text-[9px] font-mono text-[#E85D2C] font-semibold">Injecting contact JSON payload...</span>
                </div>
              )}
            </div>

            {/* UNIFIED AI AGENT BOT */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep === 'agent'
                ? 'bg-purple-500/5 border-purple-500/35 ring-2 ring-purple-500/10'
                : 'bg-brand-panel/30 border-brand-border-soft'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Users size={13} className="text-purple-500" />
                <span className="font-mono text-[10.5px] font-bold text-brand-text">3B. Conversational Agent</span>
              </div>
              <p className="text-[10px] text-brand-text-muted leading-relaxed">Handles incoming/outgoing chat queries immediately according to business files.</p>
              {activeStep === 'agent' && (
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
                  <span className="text-[9px] font-mono text-purple-600 font-semibold">Gemini drafting custom reply...</span>
                </div>
              )}
            </div>

            {/* ESCALATE / DISPATCH */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep === 'escalate'
                ? 'bg-amber-500/5 border-amber-500/35 ring-2 ring-amber-500/10'
                : 'bg-brand-panel/30 border-brand-border-soft'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <BellRing size={13} className="text-amber-500" />
                <span className="font-mono text-[10.5px] font-bold text-brand-text">3C. Human Hand-off Escalate</span>
              </div>
              <p className="text-[10px] text-brand-text-muted leading-relaxed">Deploys hot-lead notification webhook to representative if AI checks its limit.</p>
              {activeStep === 'escalate' && (
                <div className="mt-2 text-[9px] font-mono text-amber-600 font-extrabold flex items-center gap-1">
                  <ShieldAlert size={12} className="animate-bounce" />
                  SLACK/SMS DISPATCHED!
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* Real-time Status and Trace progress HUD bar */}
      <div className="w-full bg-brand-bg rounded-xl border border-brand-border/50 p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono shadow-inner">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${simulationRunning ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'} shrink-0`} />
          <span className="text-brand-text font-bold">MONITOR STATE: </span>
          <span className="text-brand-text-muted text-[11px] leading-tight text-center sm:text-left">{currentStatusText}</span>
        </div>
        
        {activeStep === 'completed' ? (
          <span className="text-emerald-600 font-extrabold flex items-center gap-1 text-[10px]">
            <CheckCircle2 size={12} />
            AUDIT SUCCESSFUL
          </span>
        ) : (
          <span className="text-[10.5px] text-brand-text-muted font-bold">SLA TARGET &lt; 2s</span>
        )}
      </div>

      {/* Console logs output */}
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-[9px] text-brand-text-muted uppercase tracking-wider font-extrabold">Workflow execution telemetry</span>
        <div className="h-32 bg-[#1A1916] border border-brand-border text-[10.5px] font-mono text-stone-200 rounded-xl p-3 overflow-y-auto space-y-1.5 shadow-inner">
          {logs.length === 0 ? (
            <div className="text-stone-500 italic h-full flex items-center justify-center">Press "Run Simulated Trace" to start auditing telemetry...</div>
          ) : (
            logs.map((log) => (
              <div key={log.id} className="flex items-start gap-1.5 pb-1 border-b border-white/[0.04]">
                <span className="text-stone-500">[{log.time}]</span>
                <span className={`px-1 py-0.2 rounded font-extrabold uppercase text-[7.5px] ${
                  log.type === 'success' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' :
                  log.type === 'warn' ? 'bg-amber-950/80 text-amber-300 border border-amber-800' :
                  log.type === 'action' ? 'bg-sky-950/80 text-sky-300 border border-sky-800' :
                  'bg-stone-800 text-stone-400 border border-stone-700'
                }`}>
                  {log.type}
                </span>
                <span className="text-stone-300 ml-1">{log.text}</span>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
