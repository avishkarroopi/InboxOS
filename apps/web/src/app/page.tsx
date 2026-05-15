"use client";

import { useMailStore } from "@/stores/use-mail-store";
import { Sidebar } from "@/components/sidebar";
import { ThreadList } from "@/components/thread-list";
import { EmailDetail } from "@/components/email-detail";
import { AIInboxBrief } from "@/components/ai-brief";
import { useMounted } from "@/hooks/use-mounted";
import { Menu, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const isMounted = useMounted();
  const { data: session, status } = useSession();
  const { selectedEmailId, selectEmail } = useMailStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent SSR flash
  if (!isMounted) {
    return <div className="h-screen bg-[#09090b]" />;
  }

  // Cinematic Login Screen
  if (status === "unauthenticated") {
    return (
      <div className="h-screen w-full bg-[#09090b] flex flex-col items-center justify-center relative overflow-hidden selection:bg-indigo-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#09090b] to-[#09090b]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center"
        >
          <div className="relative mb-10 group cursor-default">
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full scale-150 animate-pulse duration-3000" />
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-b from-indigo-500/20 to-[#09090b] border border-indigo-500/30 flex items-center justify-center backdrop-blur-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/20 to-transparent opacity-50" />
              <Sparkles className="w-10 h-10 text-indigo-400 relative z-10" />
            </div>
          </div>
          
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 mb-4">
            InboxOS
          </h1>
          <p className="text-zinc-400 text-[15px] leading-relaxed mb-12">
            The premium AI-native email experience. Summarize threads, draft intelligent replies, and prioritize your focus.
          </p>
          
          <button 
            onClick={() => signIn("google")}
            className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-[15px] font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] active:scale-[0.98]"
          >
            Continue with Google
          </button>
        </motion.div>
      </div>
    );
  }

  // Loading Session
  if (status === "loading") {
    return (
      <div className="h-screen w-full bg-[#09090b] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  // Authenticated 3-pane Layout
  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full h-14 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 z-50 flex items-center px-4 justify-between">
        <button onClick={() => setMobileMenuOpen(true)} className="p-2 -ml-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg">
          <Menu className="w-5 h-5" />
        </button>
        <span className="font-semibold text-sm tracking-tight">InboxOS</span>
        <div className="w-9" />
      </div>

      {/* Sidebar Desktop */}
      <div className="hidden md:block shrink-0 z-20">
        <Sidebar />
      </div>

      {/* Sidebar Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-[#09090b] z-50 shadow-2xl"
            >
              <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative pt-14 md:pt-0">
        
        {/* Thread List Pane */}
        <div className={`
          flex flex-col h-full shrink-0 border-r border-zinc-200 dark:border-zinc-800/60 bg-zinc-50/30 dark:bg-zinc-950/50
          absolute inset-0 md:relative md:w-[360px] lg:w-[400px] z-10
          transition-transform duration-300 ease-in-out
          ${selectedEmailId ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
        `}>
          <AIInboxBrief />
          <ThreadList />
        </div>

        {/* Email Detail Pane */}
        <div className={`
          flex-1 h-full bg-white dark:bg-[#09090b] z-20 absolute inset-0 md:relative
          transition-transform duration-300 ease-in-out
          ${selectedEmailId ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `}>
          <EmailDetail onBack={() => selectEmail(null)} />
        </div>

      </div>
    </div>
  );
}
