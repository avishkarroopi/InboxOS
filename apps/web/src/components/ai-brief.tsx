"use client";

import { useMailStore } from "@/stores/use-mail-store";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function AIInboxBrief() {
  const { emails } = useMailStore();
  
  const unreadCount = emails.filter(e => !e.isRead).length;
  const criticalCount = emails.filter(e => e.priority?.tier === 'critical').length;
  
  if (emails.length === 0) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="m-3 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-50/80 to-blue-50/50 dark:from-indigo-950/30 dark:to-blue-900/10 shadow-[0_2px_10px_-3px_rgba(79,70,229,0.1)] relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
      
      <div className="flex gap-3 relative z-10">
        <div className="mt-0.5 flex-shrink-0 relative">
          <div className="absolute inset-0 bg-indigo-400 blur-md opacity-30 dark:opacity-50 animate-pulse" />
          <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 relative z-10" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">AI Inbox Brief</h3>
          <p className="text-[13px] text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
            Good morning. You have <strong className="text-zinc-900 dark:text-zinc-200 font-medium">{unreadCount} unread emails</strong>. 
            There {criticalCount === 1 ? 'is' : 'are'} <strong className="text-rose-600 dark:text-rose-400 font-medium">{criticalCount} critical</strong> {criticalCount === 1 ? 'item' : 'items'} requiring attention today.
            1 newsletter was auto-archived.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
