export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  channel: 'whatsapp' | 'form' | 'email';
  timestamp: string;
  score: number; // 0 to 100
  category: 'High Value' | 'SQL' | 'Competitor' | 'Low Score';
  status: 'new' | 'processing' | 'contacted' | 'transferred';
}

export interface WorkflowNode {
  id: string;
  label: string;
  type: 'trigger' | 'process' | 'output';
  state: 'idle' | 'running' | 'success';
  description: string;
  x: number;
  y: number;
  connections: string[]; // target node IDs
}

export interface MetricCardValue {
  label: string;
  value: number;
  unit?: string;
  targetValue: number;
}
