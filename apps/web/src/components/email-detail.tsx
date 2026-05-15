"use client";

import { useMailStore } from "@/stores/use-mail-store";
import { Sparkles, Reply, Forward, Archive, Trash2, MoreHorizontal, ArrowLeft, Clock, Zap, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function formatFullDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { 
    weekday: 'long', month: 'long', day: 'numeric', 
    hour: 'numeric', minute: 'numeric' 
  }).format(date);
}

interface EmailDetailProps {
  onBack?: () => void;
}

export function EmailDetail({ onBack }: EmailDetailProps) {
  const { emails, selectedEmailId, archiveEmail, deleteEmail } = useMailStore();
  const email = emails.find(e => e.id === selectedEmailId);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-1 flex flex-col h-full bg-white dark:bg-[#09090b] overflow-hidden relative">
      <AnimatePresence mode="wait">
        {!email ? (
          <motion.div 
            key="empty-state"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50/50 dark:bg-[#09090b]"
          >
            <div className="relative group mb-8">
              <div className="absolute inset-0 bg-indigo-500/20 dark:bg-indigo-500/10 blur-2xl rounded-full scale-150 animate-pulse transition-transform duration-1000" />
              <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-indigo-50/80 to-blue-50/80 dark:from-indigo-900/30 dark:to-blue-900/10 flex items-center justify-center border border-indigo-100/50 dark:border-indigo-500/20 shadow-xl shadow-indigo-500/5 relative overflow-hidden backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/20 to-transparent dark:from-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400 relative z-10" />
              </div>
            </div>
            <h3 className="text-[20px] font-semibold text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight">Select a conversation</h3>
            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 text-center max-w-[320px] leading-relaxed">
              InboxOS AI will summarize threads, prioritize actions, and help draft intelligent replies.
            </p>
          </motion.div>
        ) : (
          <motion.div 
            key={email.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="flex flex-col h-full absolute inset-0"
          >
            {/* Top Action Bar */}
            <div className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-zinc-200/60 dark:border-zinc-800/60 flex-shrink-0 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl z-20">
              <div className="flex items-center gap-1.5">
                <button onClick={onBack} className="md:hidden p-2 mr-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                
                <div className="flex bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-lg border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
                  <button onClick={() => archiveEmail(email.id)} className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-white dark:hover:text-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-all shadow-none hover:shadow-sm" title="Archive (E)">
                    <Archive className="w-[18px] h-[18px]" />
                  </button>
                  <button onClick={() => deleteEmail(email.id)} className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-white dark:hover:text-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-all shadow-none hover:shadow-sm" title="Delete (#)">
                    <Trash2 className="w-[18px] h-[18px]" />
                  </button>
                  <button className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-white dark:hover:text-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-all shadow-none hover:shadow-sm" title="Snooze (S)">
                    <Clock className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>

              {/* Elevated AI Action Toolbar */}
              <div className="flex items-center gap-2 p-1.5 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 dark:from-indigo-500/10 dark:to-blue-500/5 rounded-xl border border-indigo-100/50 dark:border-indigo-500/20 shadow-sm">
                <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-white/60 dark:hover:bg-indigo-500/20 rounded-lg transition-all">
                  <Zap className="w-[14px] h-[14px]" />
                  Summarize
                </button>
                <div className="w-[1px] h-4 bg-indigo-200/50 dark:bg-indigo-500/20 mx-0.5" />
                <button className="group relative flex items-center gap-2 px-4 py-1.5 text-[13px] font-bold bg-white dark:bg-[#18181b] text-indigo-600 dark:text-indigo-400 rounded-lg shadow-sm border border-indigo-100 dark:border-indigo-500/30 transition-all hover:shadow hover:text-indigo-700 dark:hover:text-indigo-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 dark:via-indigo-500/10 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Sparkles className="w-[14px] h-[14px] relative z-10" />
                  <span className="relative z-10">Draft Reply</span>
                </button>
                <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-[13px] font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-white/60 dark:hover:bg-indigo-500/20 rounded-lg transition-all">
                  <CheckCircle2 className="w-[14px] h-[14px]" />
                  Prioritize
                </button>
              </div>
            </div>

            {/* Email Content Scroll Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              <div className="max-w-[720px] mx-auto py-10 px-6 md:px-12">
                <motion.h1 
                  layoutId={`subject-${email.id}`}
                  className="text-[28px] font-bold tracking-tight leading-snug mb-10 text-zinc-900 dark:text-zinc-50"
                >
                  {email.subject}
                </motion.h1>

                <div className="flex items-start justify-between mb-12 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-indigo-900/40 dark:to-blue-900/20 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-lg border border-indigo-200/50 dark:border-indigo-500/20 shadow-sm">
                      {(email.from.name || email.from.email).charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[15px] text-zinc-900 dark:text-zinc-100">{email.from.name}</span>
                        <span className="text-[13px] text-zinc-500 dark:text-zinc-400 font-medium tracking-tight bg-zinc-100/50 dark:bg-zinc-800/50 px-2 py-0.5 rounded-md">{email.from.email}</span>
                      </div>
                      <div className="text-[13px] text-zinc-500 dark:text-zinc-500">
                        to <span className="font-medium text-zinc-700 dark:text-zinc-300">{email.to.map(t => t.name || t.email).join(', ')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2.5">
                    <span className="text-[13px] text-zinc-400 dark:text-zinc-500 font-medium tracking-tight">
                      {mounted ? formatFullDate(email.receivedAt) : "Loading date..."}
                    </span>
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"><Reply className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>

                <div 
                  className="prose prose-zinc dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-[15px] prose-p:text-zinc-800 dark:prose-p:text-zinc-300 prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
                  dangerouslySetInnerHTML={{ __html: email.body.html }} 
                />

                <div className="mt-20 pt-6 flex gap-3">
                  <button className="flex items-center gap-2.5 px-6 py-2.5 text-[14px] font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-zinc-900/10 dark:shadow-white/10">
                    <Reply className="w-[18px] h-[18px]" /> Reply
                  </button>
                  <button className="flex items-center gap-2.5 px-6 py-2.5 text-[14px] font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181b] text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm">
                    <Forward className="w-[18px] h-[18px]" /> Forward
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
