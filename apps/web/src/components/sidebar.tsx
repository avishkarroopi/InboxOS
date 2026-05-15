"use client";

import { useMailStore } from "@/stores/use-mail-store";
import { 
  Inbox, 
  Send, 
  FileText, 
  Star, 
  Trash2, 
  Settings,
  Edit3
} from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const { filter, setFilter } = useMailStore();

  const navItems = [
    { id: 'inbox', label: 'Inbox', icon: Inbox },
    { id: 'starred', label: 'Starred', icon: Star },
    { id: 'sent', label: 'Sent', icon: Send },
    { id: 'drafts', label: 'Drafts', icon: FileText },
    { id: 'trash', label: 'Trash', icon: Trash2 },
  ] as const;

  const handleNav = (id: typeof filter) => {
    setFilter(id);
    onNavigate?.();
  };

  return (
    <aside className="w-full md:w-[260px] lg:w-[280px] bg-zinc-50/80 dark:bg-[#121212] border-r border-zinc-200/60 dark:border-zinc-800/60 flex flex-col h-full selection:bg-indigo-200">
      
      {/* Account Switcher */}
      <div className="h-16 flex items-center px-4 pt-2">
        <button className="flex items-center gap-3 w-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 p-2 rounded-xl transition-all duration-200 group">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
            Y
          </div>
          <span className="flex-1 text-left font-medium text-sm text-zinc-900 dark:text-zinc-100 truncate">you@inboxos.com</span>
          <span className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono border dark:border-zinc-700/50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">⌘K</span>
        </button>
      </div>

      {/* Compose Button */}
      <div className="px-4 py-3">
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded-xl flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-colors shadow-sm"
        >
          <Edit3 className="w-4 h-4 opacity-80" />
          Compose
        </motion.button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = filter === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="relative w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors group"
            >
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white dark:bg-zinc-800/60 rounded-lg shadow-sm border border-zinc-200/50 dark:border-transparent"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              
              <Icon className={clsx(
                "w-[18px] h-[18px] relative z-10 transition-colors",
                isActive ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"
              )} />
              
              <span className={clsx(
                "relative z-10 font-medium transition-colors",
                isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"
              )}>
                {item.label}
              </span>

              {item.id === 'inbox' && (
                <span className={clsx(
                  "relative z-10 ml-auto text-xs font-semibold px-2 py-0.5 rounded-full transition-colors",
                  isActive 
                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300" 
                    : "bg-zinc-200/50 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                )}>
                  3
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Settings Footer */}
      <div className="p-4 mt-auto">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800/50 transition-colors">
          <Settings className="w-[18px] h-[18px]" />
          Settings
        </button>
      </div>
    </aside>
  );
}
