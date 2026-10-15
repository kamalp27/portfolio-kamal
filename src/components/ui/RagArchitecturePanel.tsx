import React from 'react';
import { Database, FileText, ArrowRight, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';

export const RagArchitecturePanel: React.FC = () => {
  return (
    <div
      className="rounded-lg bg-[#1A2535] border border-[#243447] p-4 sm:p-6 w-full max-w-md mx-auto lg:max-w-none shadow-xl"
      aria-label="Illustration of RAG pipeline architecture showing document ingestion, vector retrieval, and grounded synthesis"
    >
      {/* Panel Header */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#243447]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#78A9FF]" aria-hidden="true" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F5F8]">
            RAG Pipeline Architecture
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#78A9FF] bg-[#101827] px-2 py-0.5 rounded border border-[#243447]">
          FastAPI &bull; Python
        </span>
      </div>

      {/* Pipeline Stages */}
      <div className="space-y-2.5 sm:space-y-3">
        {/* Stage 1: Ingestion & Chunking */}
        <div className="p-2.5 sm:p-3 rounded bg-[#101827] border border-[#243447] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-1.5 rounded bg-[#1A2535] text-[#78A9FF] shrink-0">
              <FileText size={15} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#F3F5F8] truncate">
                Document Ingestion & Chunking
              </div>
              <div className="text-[11px] text-[#94A3B8] truncate">
                Multi-format parsing &bull; 1,000+ files
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#64748B] shrink-0">STAGE 01</span>
        </div>

        {/* Connector */}
        <div className="flex justify-center text-[#78A9FF]/60 py-0.5">
          <ArrowRight size={14} className="rotate-90" aria-hidden="true" />
        </div>

        {/* Stage 2: Vector Search & Retrieval */}
        <div className="p-2.5 sm:p-3 rounded bg-[#101827] border border-[#243447] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-1.5 rounded bg-[#1A2535] text-[#78A9FF] shrink-0">
              <Database size={15} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#F3F5F8] truncate">
                Vector Embedding & Retrieval
              </div>
              <div className="text-[11px] text-[#94A3B8] truncate">
                Dense embeddings &bull; Top-k vector retrieval
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#64748B] shrink-0">STAGE 02</span>
        </div>

        {/* Connector with RBAC Gate */}
        <div className="flex items-center justify-center gap-2 py-0.5 text-xs text-[#78A9FF]/70">
          <ArrowRight size={14} className="rotate-90" aria-hidden="true" />
          <span className="text-[10px] font-mono bg-[#1A2535] px-2 py-0.5 rounded border border-[#243447] text-[#94A3B8] inline-flex items-center gap-1">
            <ShieldCheck size={11} className="text-[#78A9FF]" aria-hidden="true" />
            JWT & RBAC Gate
          </span>
        </div>

        {/* Stage 3: Grounded Synthesis & Faithfulness */}
        <div className="p-2.5 sm:p-3 rounded bg-[#101827] border border-[#243447] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-1.5 rounded bg-[#1A2535] text-[#78A9FF] shrink-0">
              <Cpu size={15} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#F3F5F8] truncate">
                Context Synthesis & Grounding
              </div>
              <div className="text-[11px] text-[#94A3B8] truncate">
                LLM synthesis &bull; Grounded response generation
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#64748B] shrink-0">STAGE 03</span>
        </div>
      </div>

      {/* Footer Provenance Notice */}
      <div className="mt-4 pt-3 border-t border-[#243447] flex items-center justify-between text-[11px] text-[#94A3B8]">
        <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px]">
          <CheckCircle2 size={12} aria-hidden="true" />
          <span>Architecture Flow</span>
        </div>
        <span className="text-[10px] text-[#64748B] font-mono">
          Document to Grounded Output
        </span>
      </div>
    </div>
  );
};
