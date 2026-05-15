"use client";

import { useMailStore } from "@/stores/use-mail-store";
import { Search } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Hydration-safe time formatter
function formatTime(date: Date) {
  return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).format(date);
}

export function ThreadList() {
  const { emails, selectedEmailId, selectEmail, filter, searchQuery, setSearchQuery } = useMailStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredEmails = emails.filter(email => {
    if (searchQuery && !email.subject.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !(email.from.name || '').toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filter === 'inbox') return true; 
    if (filter === 'starred') return email.isStarred;
    return false;
  });

  return (
    <div className="flex flex-col h-full bg-zinc-50/50 dark:bg-[#0c0c0e]">
      <div className="h-16 flex items-center px-4 md:px-5 border-b border-zinc-200/50 dark:border-zinc-800/50 flex-shrink-0 bg-white/80 dark:bg-[#0c0c0e]/80 backdrop-blur-md z-20">
        <h2 className="font-semibold text-[15px] tracking-tight capitalize text-zinc-900 dark:text-zinc-100">{filter}</h2>
      </div>
      
      {/* Premium Search Bar */}
      <div className="px-3 pt-3 pb-2 z-10 sticky top-0 bg-zinc-50/90 dark:bg-[#0c0c0e]/90 backdrop-blur-md">
        <div className="relative group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-zinc-400 dark:text-zinc-500 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-9 pr-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all shadow-sm"
            placeholder="Search emails..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity">
            <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 border dark:border-zinc-700 px-1.5 rounded bg-zinc-50 dark:bg-zinc-800">↵</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-1">
        <AnimatePresence initial={false}>
          {filteredEmails.map((email) => {
            const isSelected = email.id === selectedEmailId;
            const isCritical = email.priority?.tier === 'critical';
            const isUnread = !email.isRead;

            return (
              <motion.button
                key={email.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => selectEmail(email.id)}
                className={clsx(
                  "w-full text-left p-3.5 rounded-xl transition-all relative flex flex-col gap-1.5 shadow-sm group",
                  isSelected 
                    ? "bg-indigo-50/80 dark:bg-indigo-500/10 border-indigo-200/60 dark:border-indigo-500/30 border ring-1 ring-indigo-500/20 dark:ring-indigo-500/10" 
                    : "bg-white dark:bg-[#121214] hover:bg-zinc-50 dark:hover:bg-[#18181b] border border-zinc-200/40 dark:border-zinc-800/60"
                )}
              >
                {/* Unread indicator dot */}
                {isUnread && (
                  <div className="absolute top-5 left-2.5 w-[7px] h-[7px] bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                )}

                <div className="flex items-baseline justify-between pl-3">
                  <span className={clsx(
                    "text-[14px] truncate max-w-[70%]",
                    isUnread ? "font-bold text-zinc-900 dark:text-zinc-50" : "font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors"
                  )}>
                    {email.from.name || email.from.email}
                  </span>
                  <span className={clsx(
                    "text-[11px] whitespace-nowrap tabular-nums",
                    isUnread ? "text-indigo-600 dark:text-indigo-400 font-semibold" : "text-zinc-400 dark:text-zinc-500"
                  )}>
                    {mounted ? formatTime(email.receivedAt) : "--:--"}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 pl-3">
                  <span className={clsx(
                    "text-[13px] truncate tracking-tight",
                    isUnread ? "font-semibold text-zinc-900 dark:text-zinc-100" : "font-medium text-zinc-500 dark:text-zinc-400"
                  )}>
                    {email.subject}
                  </span>
                  {isCritical && (
                    <span className="bg-rose-100/80 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400 text-[9px] tracking-wider uppercase font-bold px-1.5 py-0.5 rounded shadow-sm flex-shrink-0">
                      Urgent
                    </span>
                  )}
                </div>
                
                <p className="text-[12.5px] leading-relaxed text-zinc-500 dark:text-zinc-500 line-clamp-2 pl-3 mt-0.5 font-normal">
                  {email.snippet}
                </p>
              </motion.button>
            );
          })}
        </AnimatePresence>

        {mounted && filteredEmails.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center h-48 text-zinc-500 py-12 text-center"
          >
            <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-200/50 dark:border-zinc-800/50">
              <Search className="w-5 h-5 text-zinc-400" />
            </div>
            <p className="text-[14px] font-medium text-zinc-700 dark:text-zinc-300">No emails found</p>
            <p className="text-[13px] mt-1 text-zinc-500">Try adjusting your search or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
