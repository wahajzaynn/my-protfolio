import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lead } from '../types';
import { Sparkles, MessageSquare, Phone, Mail, Clock, Filter, AlertTriangle, CheckSquare } from 'lucide-react';

const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Tariq Al-Mansoori',
    company: 'Al-Mansoori Developments (Dubai)',
    email: 'tariq@almansoori.ae',
    phone: '+971 50 123 4567',
    message: 'Hello, looking to automate our lead assignment process. We receive roughly 120 leads/day from PropertyFinder and WhatsApp. Currently our agents use Pipedrive but key entries are done manually. We want to dispatch automated WhatsApp quotes within 2 minutes. Can you build this?',
    channel: 'whatsapp',
    timestamp: '13:42:15',
    score: 95,
    category: 'High Value',
    status: 'transferred'
  },
  {
    id: 'lead-2',
    name: 'Karim Joseph',
    company: 'KJ Logistics (Abu Dhabi)',
    email: 'k.joseph@kjlogistics.com',
    phone: '+971 52 987 6543',
    message: 'Hey, do you support custom Hubspot CRM integration? Looking to score leads coming to our web forms. Some competitors are reaching out, so we need to filter them out instantly.',
    channel: 'form',
    timestamp: '13:20:00',
    score: 88,
    category: 'SQL',
    status: 'contacted'
  },
  {
    id: 'lead-3',
    name: 'Elena Rostova',
    company: 'Apex Trading Corp',
    email: 'elena@apextech.ru',
    message: 'Greetings, just checking prices for basic WhatsApp broadcasting templates.',
    channel: 'email',
    timestamp: '12:05:10',
    score: 42,
    category: 'Low Score',
    status: 'processing'
  }
];

const NEW_SAMPLE_LEADS: Omit<Lead, 'id' | 'timestamp'>[] = [
  {
    name: 'Majed bin Sultan',
    company: 'Sultan Capital',
    email: 'sultan@sultancapital.sa',
    phone: '+966 50 555 1234',
    message: 'We are expanding our investment firm in Riyadh and require a system that instantly reads raw email brochures, extracts client budgets, scores them, and alerts our investment advisory desk.',
    channel: 'email',
    score: 97,
    category: 'High Value',
    status: 'new'
  },
  {
    name: 'Sarah Jenkins',
    company: 'NextGen Real Estate',
    email: 'sarah@nextgenproperties.ae',
    phone: '+971 58 444 3322',
    message: 'Hi Wahaj, we have an n8n starter setup but it keeps breaking during webhook overload. We need a clean failover flow and automated lead replies via WhatsApp Business.',
    channel: 'form',
    score: 91,
    category: 'High Value',
    status: 'new'
  },
  {
    name: 'David Lee',
    company: 'GlowMedia Marketing',
    email: 'david@glowmedia.ae',
    message: 'Collaborative agency offer. We want to pitch automation setups together with our ad services in the Gulf.',
    channel: 'whatsapp',
    score: 65,
    category: 'SQL',
    status: 'new'
  }
];

export default function LeadDashboardMock() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [selectedLeadId, setSelectedLeadId] = useState<string>('lead-1');
  const [activeChannelFilter, setActiveChannelFilter] = useState<'all' | 'whatsapp' | 'form' | 'email'>('all');

  const selectedLead = leads.find(l => l.id === selectedLeadId) || leads[0];

  useEffect(() => {
    // Simulate periodic incoming leads
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * NEW_SAMPLE_LEADS.length);
      const randomLeadTemplate = NEW_SAMPLE_LEADS[idx];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      
      const newLead: Lead = {
        ...randomLeadTemplate,
        id: `lead-new-${Date.now()}`,
        timestamp: timeStr
      };

      setLeads(prev => [newLead, ...prev].slice(0, 8));
      
      // Auto-select the newly arrived lead to show the dynamic update
      setSelectedLeadId(newLead.id);
    }, 18000); // New mockup lead every 18 seconds!

    return () => clearInterval(interval);
  }, []);

  const handleManualAdd = () => {
    const idx = Math.floor(Math.random() * NEW_SAMPLE_LEADS.length);
    const randomLeadTemplate = NEW_SAMPLE_LEADS[idx];
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    
    const newLead: Lead = {
      ...randomLeadTemplate,
      id: `lead-manual-${Date.now()}`,
      timestamp: timeStr
    };

    setLeads(prev => [newLead, ...prev].slice(0, 8));
    setSelectedLeadId(newLead.id);
  };

  const filteredLeads = leads.filter(l => {
    if (activeChannelFilter === 'all') return true;
    return l.channel === activeChannelFilter;
  });

  return (
    <div className="w-full bg-brand-panel/30 rounded-xl p-4 md:p-6 border border-brand-border-soft flex flex-col gap-4 select-none">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-display font-semibold text-brand-text text-sm md:text-base">AI Lead Intake & Triage Panel</h4>
          <p className="font-sans text-xs text-brand-text-muted mt-0.5">Live CRM feed simulation populated by autonomous crawlers</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleManualAdd}
            className="px-2.5 py-1.5 rounded-lg text-[11px] font-mono bg-brand-panel-2 hover:bg-brand-border border border-brand-border transition-all cursor-pointer"
          >
            + Feed Inbound Lead
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1.5 border-b border-brand-border/40 pb-2.5">
        {(['all', 'whatsapp', 'form', 'email'] as const).map((ch) => (
          <button
            key={ch}
            onClick={() => setActiveChannelFilter(ch)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all capitalize cursor-pointer ${
              activeChannelFilter === ch
                ? 'bg-brand-accent text-white font-semibold'
                : 'bg-brand-panel-2/60 text-brand-text-muted hover:bg-brand-panel-2'
            }`}
          >
            {ch === 'all' ? 'All Channels' : ch}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Leads Feed List (Span 4) */}
        <div className="md:col-span-5 flex flex-col gap-2 max-h-72 md:max-h-96 overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {filteredLeads.map((lead) => {
              const isSelected = lead.id === selectedLeadId;
              return (
                <motion.div
                  key={lead.id}
                  layoutId={`lead-card-${lead.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setSelectedLeadId(lead.id)}
                  className={`p-3 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-brand-panel-2 border-brand-accent shadow-sm'
                      : 'bg-brand-panel/40 hover:bg-brand-panel border-brand-border/30'
                  }`}
                >
                  <div className="flex justify-between items-start gap-1">
                    <span className="font-sans font-bold text-xs text-brand-text break-words line-clamp-1 max-w-[140px]">
                      {lead.name}
                    </span>
                    <span className="font-mono text-[9px] text-brand-text-muted shrink-0 flex items-center gap-1">
                      <Clock size={9} />
                      {lead.timestamp}
                    </span>
                  </div>
                  <p className="font-sans text-[10px] text-brand-text-muted mt-1 leading-normal line-clamp-2">
                    {lead.message}
                  </p>

                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-brand-border/20">
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono capitalize ${
                      lead.channel === 'whatsapp' ? 'bg-emerald-950/10 text-emerald-700' :
                      lead.channel === 'email' ? 'bg-indigo-950/10 text-indigo-700' :
                      'bg-orange-950/10 text-orange-700'
                    }`}>
                      {lead.channel}
                    </span>

                    <span className={`font-mono text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      lead.score >= 90 ? 'bg-emerald-100 text-emerald-800' :
                      lead.score >= 70 ? 'bg-amber-100 text-amber-800' :
                      'bg-stone-100 text-stone-700'
                    }`}>
                      Score: {lead.score}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {filteredLeads.length === 0 && (
            <p className="font-mono text-xs text-brand-text-muted text-center py-6">No leads found in this channel feed.</p>
          )}
        </div>

        {/* Selected Lead Deep Detail Panel (Span 7) */}
        <div className="md:col-span-7 bg-brand-bg rounded-lg border border-brand-border/40 p-4 flex flex-col justify-between shadow-inner">
          {selectedLead ? (
            <div className="flex flex-col gap-3.5 h-full">
              {/* Header Details */}
              <div className="flex justify-between items-start gap-2 border-b border-brand-border/20 pb-3">
                <div>
                  <h5 className="font-display font-semibold text-brand-text text-sm">{selectedLead.name}</h5>
                  <p className="font-sans text-[10.5px] text-brand-text-muted mt-0.5 font-medium">{selectedLead.company}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    selectedLead.score >= 90 ? 'bg-emerald-600 text-white' :
                    selectedLead.score >= 70 ? 'bg-amber-500 text-white' :
                    'bg-brand-text-muted text-white'
                  }`}>
                    {selectedLead.category}
                  </span>
                  <p className="font-mono text-[9px] text-brand-text-muted mt-1">Weight Score: {selectedLead.score}/100</p>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-brand-text-muted bg-brand-panel/40 p-2 rounded border border-brand-border-soft">
                <div className="truncate flex items-center gap-1.5">
                  <Mail size={11} className="text-brand-text-muted shrink-0" />
                  {selectedLead.email}
                </div>
                {selectedLead.phone ? (
                  <div className="truncate flex items-center gap-1.5">
                    <Phone size={11} className="text-brand-text-muted shrink-0" />
                    {selectedLead.phone}
                  </div>
                ) : (
                  <div className="text-brand-text-muted/50 italic">No WhatsApp catalogued</div>
                )}
              </div>

              {/* Raw Message Box */}
              <div>
                <span className="font-mono text-[9px] text-brand-text-muted uppercase tracking-wider block">Raw Webhook Ingest Content</span>
                <div className="mt-1 bg-brand-panel/50 p-2.5 rounded text-xs text-brand-text border border-brand-border/25 leading-relaxed max-h-24 overflow-y-auto">
                  "{selectedLead.message}"
                </div>
              </div>

              {/* GPT-4o Insights Area */}
              <div className="bg-brand-accent/5 p-3 rounded-lg border border-brand-accent/25">
                <div className="flex items-center gap-1.5 text-brand-accent font-display text-xs font-semibold mb-2">
                  <Sparkles size={12} />
                  Autonomous Reply Draft & CRM Fields Engine
                </div>
                <div className="space-y-2 text-[11px] font-sans text-brand-text">
                  <div>
                    <span className="font-mono font-bold text-[9px] uppercase text-brand-text-muted mr-1.5">Categorization:</span>
                    {selectedLead.score >= 90 ? 'Immediate WhatsApp Dispatch & HubSpot CRM Stage: Opportunity' : 'Log to HubSpot CRM & Sequence Email'}
                  </div>

                  <div>
                    <span className="font-mono font-bold text-[9px] uppercase text-brand-text-muted mr-1.5">Extracted Competitors:</span>
                    <span className="font-mono font-bold text-rose-600 bg-rose-50 px-1 py-0.2 rounded border border-rose-100">
                      {selectedLead.message.toLowerCase().includes('pipedrive') ? 'Pipedrive' : 'None detected'}
                    </span>
                  </div>

                  <div className="border-t border-brand-border-soft pt-2">
                    <span className="font-mono font-bold text-[9px] uppercase text-brand-text-muted block mb-1">Generated WhatsApp Outbound:</span>
                    <p className="italic text-brand-text-muted bg-white p-1.5 rounded border border-brand-border-soft/60">
                      "Hi {selectedLead.name.split(' ')[0]}, thanks for reaching out. Wahaj Hussain here. I saw your prompt about automating PropertyFinder leads to Pipedrive. I have built exactly this before with 2min SLA. Let's schedule a chat: calendar.ae/wahaj"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="font-mono text-xs text-brand-text-muted text-center py-20">Select an arriving lead to drill down into the automated event log.</p>
          )}
        </div>
      </div>
    </div>
  );
}
