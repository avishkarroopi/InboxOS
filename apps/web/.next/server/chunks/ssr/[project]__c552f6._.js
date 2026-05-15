module.exports = {

"[project]/tests/fixtures/emails.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"id\":\"msg_1\",\"externalId\":\"ext_1\",\"accountId\":\"acc_1\",\"threadId\":\"thread_1\",\"subject\":\"Q3 Board Deck Review\",\"from\":{\"name\":\"Sarah Chen\",\"email\":\"sarah@acmecorp.com\"},\"to\":[{\"name\":\"You\",\"email\":\"you@inboxos.com\"}],\"cc\":[],\"bcc\":[],\"body\":{\"html\":\"<p>Hi team, please review the attached Q3 board deck before our meeting tomorrow at 10 AM. Pay special attention to the revenue slides.</p>\",\"text\":\"Hi team, please review the attached Q3 board deck before our meeting tomorrow at 10 AM. Pay special attention to the revenue slides.\"},\"snippet\":\"Hi team, please review the attached Q3 board deck before our meeting tomorrow...\",\"labels\":[{\"id\":\"label_inbox\",\"name\":\"Inbox\",\"type\":\"system\"}],\"attachments\":[],\"receivedAt\":\"2026-05-14T08:30:00.000Z\",\"isRead\":false,\"isStarred\":true,\"priority\":{\"score\":95,\"tier\":\"critical\",\"reason\":\"Direct request from CEO regarding board meeting\",\"signals\":[],\"calculatedAt\":\"2026-05-14T08:30:05.000Z\"},\"aiSummary\":null,\"syncStatus\":\"synced\"},{\"id\":\"msg_2\",\"externalId\":\"ext_2\",\"accountId\":\"acc_1\",\"threadId\":\"thread_2\",\"subject\":\"Your AWS Invoice is Ready\",\"from\":{\"name\":\"AWS Billing\",\"email\":\"no-reply-aws@amazon.com\"},\"to\":[{\"name\":\"You\",\"email\":\"you@inboxos.com\"}],\"cc\":[],\"bcc\":[],\"body\":{\"html\":\"<p>Your invoice for the period of April 2026 is available.</p>\",\"text\":\"Your invoice for the period of April 2026 is available.\"},\"snippet\":\"Your invoice for the period of April 2026 is available.\",\"labels\":[{\"id\":\"label_inbox\",\"name\":\"Inbox\",\"type\":\"system\"}],\"attachments\":[],\"receivedAt\":\"2026-05-13T14:15:00.000Z\",\"isRead\":true,\"isStarred\":false,\"priority\":{\"score\":30,\"tier\":\"low\",\"reason\":\"Automated billing notification\",\"signals\":[],\"calculatedAt\":\"2026-05-13T14:15:05.000Z\"},\"aiSummary\":null,\"syncStatus\":\"synced\"},{\"id\":\"msg_3\",\"externalId\":\"ext_3\",\"accountId\":\"acc_1\",\"threadId\":\"thread_3\",\"subject\":\"Weekly Engineering Sync\",\"from\":{\"name\":\"David Park\",\"email\":\"david@acmecorp.com\"},\"to\":[{\"name\":\"Engineering Team\",\"email\":\"eng@acmecorp.com\"}],\"cc\":[],\"bcc\":[],\"body\":{\"html\":\"<p>Agenda for today's sync: 1. Monorepo migration status. 2. CI/CD pipeline improvements.</p>\",\"text\":\"Agenda for today's sync: 1. Monorepo migration status. 2. CI/CD pipeline improvements.\"},\"snippet\":\"Agenda for today's sync: 1. Monorepo migration status...\",\"labels\":[{\"id\":\"label_inbox\",\"name\":\"Inbox\",\"type\":\"system\"}],\"attachments\":[],\"receivedAt\":\"2026-05-14T09:00:00.000Z\",\"isRead\":false,\"isStarred\":false,\"priority\":{\"score\":60,\"tier\":\"normal\",\"reason\":\"Team-wide meeting agenda\",\"signals\":[],\"calculatedAt\":\"2026-05-14T09:00:05.000Z\"},\"aiSummary\":null,\"syncStatus\":\"synced\"}]"));}}),
"[project]/apps/web/src/stores/use-mail-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useMailStore": (()=>useMailStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$tests$2f$fixtures$2f$emails$2e$json__$28$json$29$__ = __turbopack_import__("[project]/tests/fixtures/emails.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$18$2e$3$2e$28_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@4.5.7_@types+react@18.3.28_react@19.0.0-rc-66855b96-20241106/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>");
;
;
// Convert JSON strings to Dates for the mock data
const parsedMockEmails = __TURBOPACK__imported__module__$5b$project$5d2f$tests$2f$fixtures$2f$emails$2e$json__$28$json$29$__["default"].map((email)=>({
        ...email,
        receivedAt: new Date(email.receivedAt),
        priority: email.priority ? {
            ...email.priority,
            calculatedAt: new Date(email.priority.calculatedAt)
        } : null
    }));
const useMailStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$18$2e$3$2e$28_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set)=>({
        emails: parsedMockEmails,
        selectedEmailId: null,
        searchQuery: '',
        filter: 'inbox',
        selectEmail: (id)=>set({
                selectedEmailId: id
            }),
        setSearchQuery: (query)=>set({
                searchQuery: query
            }),
        setFilter: (filter)=>set({
                filter,
                selectedEmailId: null
            }),
        toggleReadStatus: (id)=>set((state)=>({
                    emails: state.emails.map((email)=>email.id === id ? {
                            ...email,
                            isRead: !email.isRead
                        } : email)
                })),
        archiveEmail: (id)=>set((state)=>({
                    emails: state.emails.filter((email)=>email.id !== id),
                    selectedEmailId: state.selectedEmailId === id ? null : state.selectedEmailId
                })),
        deleteEmail: (id)=>set((state)=>({
                    emails: state.emails.filter((email)=>email.id !== id),
                    selectedEmailId: state.selectedEmailId === id ? null : state.selectedEmailId
                }))
    }));
}}),
"[project]/apps/web/src/components/sidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Sidebar": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
"use client";
;
;
;
;
;
function Sidebar({ onNavigate }) {
    const { filter, setFilter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMailStore"])();
    const navItems = [
        {
            id: 'inbox',
            label: 'Inbox',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"]
        },
        {
            id: 'starred',
            label: 'Starred',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
        },
        {
            id: 'sent',
            label: 'Sent',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"]
        },
        {
            id: 'drafts',
            label: 'Drafts',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            id: 'trash',
            label: 'Trash',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"]
        }
    ];
    const handleNav = (id)=>{
        setFilter(id);
        onNavigate?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-full md:w-[260px] lg:w-[280px] bg-zinc-50/80 dark:bg-[#121212] border-r border-zinc-200/60 dark:border-zinc-800/60 flex flex-col h-full selection:bg-indigo-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-16 flex items-center px-4 pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center gap-3 w-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 p-2 rounded-xl transition-all duration-200 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow",
                            children: "Y"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/sidebar.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1 text-left font-medium text-sm text-zinc-900 dark:text-zinc-100 truncate",
                            children: "you@inboxos.com"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/sidebar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-400 dark:text-zinc-500 text-[10px] font-mono border dark:border-zinc-700/50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity",
                            children: "⌘K"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/sidebar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/sidebar.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: {
                        scale: 1.01
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    className: "w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded-xl flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-colors shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                            className: "w-4 h-4 opacity-80"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/sidebar.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        "Compose"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/sidebar.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-2 space-y-0.5 overflow-y-auto",
                children: navItems.map((item)=>{
                    const Icon = item.icon;
                    const isActive = filter === item.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNav(item.id),
                        className: "relative w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors group",
                        children: [
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "activeTab",
                                className: "absolute inset-0 bg-white dark:bg-zinc-800/60 rounded-lg shadow-sm border border-zinc-200/50 dark:border-transparent",
                                initial: false,
                                transition: {
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                                lineNumber: 74,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("w-[18px] h-[18px] relative z-10 transition-colors", isActive ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("relative z-10 font-medium transition-colors", isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this),
                            item.id === 'inbox' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("relative z-10 ml-auto text-xs font-semibold px-2 py-0.5 rounded-full transition-colors", isActive ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300" : "bg-zinc-200/50 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"),
                                children: "3"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/apps/web/src/components/sidebar.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800/50 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "w-[18px] h-[18px]"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/sidebar.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        "Settings"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/sidebar.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/sidebar.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}}),
"[project]/apps/web/src/components/thread-list.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ThreadList": (()=>ThreadList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function formatTime(date) {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric'
    }).format(date);
}
function ThreadList() {
    const { emails, selectedEmailId, selectEmail, filter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMailStore"])();
    const filteredEmails = emails.filter((email)=>{
        if (filter === 'inbox') return true; // simplified for mock
        if (filter === 'starred') return email.isStarred;
        return false;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[350px] lg:w-[400px] border-r flex flex-col h-screen bg-white dark:bg-zinc-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-14 flex items-center px-4 border-b flex-shrink-0 bg-white dark:bg-zinc-950 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-semibold text-sm capitalize",
                    children: filter
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/thread-list.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: [
                    filteredEmails.map((email)=>{
                        const isSelected = email.id === selectedEmailId;
                        const isCritical = email.priority?.tier === 'critical';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>selectEmail(email.id),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("w-full text-left p-4 border-b transition-colors relative flex flex-col gap-1", isSelected ? "bg-blue-50 dark:bg-blue-900/20 border-l-2 border-l-blue-600" : "hover:bg-zinc-50 dark:hover:bg-zinc-900/50 border-l-2 border-l-transparent"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("font-medium text-sm truncate", !email.isRead ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400"),
                                            children: email.from.name || email.from.email
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-zinc-400 whitespace-nowrap ml-2",
                                            suppressHydrationWarning: true,
                                            children: formatTime(email.receivedAt)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("text-sm truncate", !email.isRead ? "text-zinc-900 font-medium dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400"),
                                            children: email.subject
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        isCritical && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded flex-shrink-0",
                                            children: "Urgent"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-1",
                                    children: email.snippet
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                !email.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-4 left-2 w-2 h-2 bg-blue-600 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, email.id, true, {
                            fileName: "[project]/apps/web/src/components/thread-list.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this);
                    }),
                    filteredEmails.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-full text-zinc-500 p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Nothing to see here."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-1",
                                children: "You're all caught up!"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/thread-list.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/thread-list.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}}),
"[project]/apps/web/src/components/email-detail.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "EmailDetail": (()=>EmailDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/archive.js [app-ssr] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/reply.js [app-ssr] (ecmascript) <export default as Reply>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/forward.js [app-ssr] (ecmascript) <export default as Forward>");
"use client";
;
;
;
function formatFullDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }).format(date);
}
function EmailDetail() {
    const { emails, selectedEmailId, archiveEmail, deleteEmail } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMailStore"])();
    const email = emails.find((e)=>e.id === selectedEmailId);
    if (!email) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center bg-zinc-50/50 dark:bg-zinc-900/20 text-zinc-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 mb-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-8 h-8 text-zinc-300 dark:text-zinc-600"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Select a thread to read"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/email-detail.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col h-screen bg-white dark:bg-zinc-950 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-14 flex items-center justify-between px-6 border-b flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>archiveEmail(email.id),
                                className: "p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors",
                                title: "Archive (E)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>deleteEmail(email.id),
                                className: "p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors",
                                title: "Delete (#)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center gap-2 px-3 py-1.5 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow-sm hover:from-blue-700 hover:to-indigo-700 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                "AI Draft Reply"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto py-8 px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-semibold mb-8 text-zinc-900 dark:text-zinc-100",
                            children: email.subject
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/50 dark:to-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold text-lg border border-blue-200/50 dark:border-blue-800/50 shadow-sm",
                                            children: (email.from.name || email.from.email).charAt(0).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-sm",
                                                            children: email.from.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-zinc-500",
                                                            children: [
                                                                "<",
                                                                email.from.email,
                                                                ">"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-zinc-400 mt-0.5",
                                                    children: [
                                                        "to ",
                                                        email.to.map((t)=>t.name || t.email).join(', ')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-zinc-400 flex items-center gap-4",
                                    suppressHydrationWarning: true,
                                    children: [
                                        formatFullDate(email.receivedAt),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-400 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__["Reply"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 124
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-400 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 124
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:text-blue-600",
                            dangerouslySetInnerHTML: {
                                __html: email.body.html
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 pt-6 border-t flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__["Reply"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        " Reply"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__["Forward"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        " Forward"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/email-detail.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),
"[project]/apps/web/src/components/ai-brief.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AIInboxBrief": (()=>AIInboxBrief)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
"use client";
;
;
;
;
function AIInboxBrief() {
    const { emails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMailStore"])();
    const unreadCount = emails.filter((e)=>!e.isRead).length;
    const criticalCount = emails.filter((e)=>e.priority?.tier === 'critical').length;
    if (emails.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            ease: "easeOut"
        },
        className: "m-3 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-50/80 to-blue-50/50 dark:from-indigo-950/30 dark:to-blue-900/10 shadow-[0_2px_10px_-3px_rgba(79,70,229,0.1)] relative overflow-hidden group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-0.5 flex-shrink-0 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-indigo-400 blur-md opacity-30 dark:opacity-50 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-5 h-5 text-indigo-600 dark:text-indigo-400 relative z-10"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight",
                                children: "AI Inbox Brief"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed",
                                children: [
                                    "Good morning. You have ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-zinc-900 dark:text-zinc-200 font-medium",
                                        children: [
                                            unreadCount,
                                            " unread emails"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                                        lineNumber: 32,
                                        columnNumber: 36
                                    }, this),
                                    ". There ",
                                    criticalCount === 1 ? 'is' : 'are',
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-rose-600 dark:text-rose-400 font-medium",
                                        children: [
                                            criticalCount,
                                            " critical"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                                        lineNumber: 33,
                                        columnNumber: 56
                                    }, this),
                                    " ",
                                    criticalCount === 1 ? 'item' : 'items',
                                    " requiring attention today. 1 newsletter was auto-archived."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ai-brief.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}}),
"[project]/apps/web/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/components/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$thread$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/components/thread-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$email$2d$detail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/components/email-detail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ai$2d$brief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/components/ai-brief.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$mounted$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/hooks/use-mounted.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$mounted$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMounted"])();
    const { selectedEmailId, selectEmail } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMailStore"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prevent SSR flash
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen bg-zinc-50 dark:bg-zinc-950"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/page.tsx",
            lineNumber: 20,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-blue-200 dark:selection:bg-blue-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed top-0 w-full h-14 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b z-50 flex items-center px-4 justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileMenuOpen(true),
                        className: "p-2 -ml-2 text-zinc-600 dark:text-zinc-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm",
                        children: "InboxOS"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block shrink-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setMobileMenuOpen(false),
                            className: "md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: "-100%"
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: "-100%"
                            },
                            transition: {
                                type: "spring",
                                damping: 25,
                                stiffness: 200
                            },
                            className: "md:hidden fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-zinc-950 z-50 shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                                onNavigate: ()=>setMobileMenuOpen(false)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden relative pt-14 md:pt-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
          flex flex-col h-full shrink-0 border-r border-zinc-200 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-950/50
          absolute inset-0 md:relative md:w-[360px] lg:w-[400px] z-10
          transition-transform duration-300 ease-in-out
          ${selectedEmailId ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
        `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ai$2d$brief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIInboxBrief"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$thread$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThreadList"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
          flex-1 h-full bg-white dark:bg-zinc-950 z-20 absolute inset-0 md:relative
          transition-transform duration-300 ease-in-out
          ${selectedEmailId ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$email$2d$detail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailDetail"], {
                            onBack: ()=>selectEmail(null)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}}),
"[project]/apps/web/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/.pnpm/zustand@4.5.7_@types+react@18.3.28_react@19.0.0-rc-66855b96-20241106/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createStore": (()=>createStore),
    "default": (()=>vanilla)
});
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/.pnpm/zustand@4.5.7_@types+react@18.3.28_react@19.0.0-rc-66855b96-20241106/node_modules/zustand/esm/vanilla.mjs")}`;
    }
};
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const destroy = ()=>{
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.");
        }
        listeners.clear();
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe,
        destroy
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
var vanilla = (createState)=>{
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.");
    }
    return createStore(createState);
};
;
}}),
"[project]/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.0.0-rc-66855b96-20241106/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}}),
"[project]/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.0.0-rc-66855b96-20241106/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.0.0-rc-66855b96-20241106/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}}),
"[project]/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.0.0-rc-66855b96-20241106/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), shim = __turbopack_require__("[project]/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.0.0-rc-66855b96-20241106/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}}),
"[project]/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.0.0-rc-66855b96-20241106/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.0.0-rc-66855b96-20241106/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)");
}
}}),
"[project]/node_modules/.pnpm/zustand@4.5.7_@types+react@18.3.28_react@19.0.0-rc-66855b96-20241106/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "create": (()=>create),
    "default": (()=>react),
    "useStore": (()=>useStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$18$2e$3$2e$28_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@4.5.7_@types+react@18.3.28_react@19.0.0-rc-66855b96-20241106/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.0.0-rc-66855b96-20241106/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/.pnpm/zustand@4.5.7_@types+react@18.3.28_react@19.0.0-rc-66855b96-20241106/node_modules/zustand/esm/index.mjs")}`;
    }
};
;
;
;
;
const { useDebugValue } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
let didWarnAboutEqualityFn = false;
const identity = (arg)=>arg;
function useStore(api, selector = identity, equalityFn) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
        console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937");
        didWarnAboutEqualityFn = true;
    }
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getInitialState, selector, equalityFn);
    useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && typeof createState !== "function") {
        console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    }
    const api = typeof createState === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$18$2e$3$2e$28_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState) : createState;
    const useBoundStore = (selector, equalityFn)=>useStore(api, selector, equalityFn);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
var react = (createState)=>{
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`.");
    }
    return create(createState);
};
;
}}),
"[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "clsx": (()=>clsx),
    "default": (()=>__TURBOPACK__default__export__)
});
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>defaultAttributes)
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "mergeClasses": (()=>mergeClasses),
    "toKebabCase": (()=>toKebabCase)
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>createLucideIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Inbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Inbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Inbox", [
    [
        "polyline",
        {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
            key: "o97t9d"
        }
    ],
    [
        "path",
        {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr"
        }
    ]
]);
;
 //# sourceMappingURL=inbox.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Inbox": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Star)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Star", [
    [
        "polygon",
        {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
            key: "8f66p6"
        }
    ]
]);
;
 //# sourceMappingURL=star.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Star": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Send)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Send", [
    [
        "path",
        {
            d: "m22 2-7 20-4-9-9-4Z",
            key: "1q3vgg"
        }
    ],
    [
        "path",
        {
            d: "M22 2 11 13",
            key: "nzbqef"
        }
    ]
]);
;
 //# sourceMappingURL=send.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Send": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>FileText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("FileText", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
]);
;
 //# sourceMappingURL=file-text.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "FileText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Trash2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Trash2", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }
    ]
]);
;
 //# sourceMappingURL=trash-2.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Trash2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>CirclePlus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CirclePlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CirclePlus", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 12h8",
            key: "1wcyev"
        }
    ],
    [
        "path",
        {
            d: "M12 8v8",
            key: "napkw2"
        }
    ]
]);
;
 //# sourceMappingURL=circle-plus.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "PlusCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Settings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
;
 //# sourceMappingURL=settings.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Settings": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/archive.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Archive)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Archive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Archive", [
    [
        "rect",
        {
            width: "20",
            height: "5",
            x: "2",
            y: "3",
            rx: "1",
            key: "1wp1u1"
        }
    ],
    [
        "path",
        {
            d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
            key: "1s80jp"
        }
    ],
    [
        "path",
        {
            d: "M10 12h4",
            key: "a56b0p"
        }
    ]
]);
;
 //# sourceMappingURL=archive.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/archive.js [app-ssr] (ecmascript) <export default as Archive>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Archive": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/archive.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Sparkles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
]);
;
 //# sourceMappingURL=sparkles.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Sparkles": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/reply.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Reply)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Reply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Reply", [
    [
        "polyline",
        {
            points: "9 17 4 12 9 7",
            key: "hvgpf2"
        }
    ],
    [
        "path",
        {
            d: "M20 18v-2a4 4 0 0 0-4-4H4",
            key: "5vmcpk"
        }
    ]
]);
;
 //# sourceMappingURL=reply.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/reply.js [app-ssr] (ecmascript) <export default as Reply>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Reply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/reply.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Ellipsis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Ellipsis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Ellipsis", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "12",
            r: "1",
            key: "1wjl8i"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "12",
            r: "1",
            key: "1pcz8c"
        }
    ]
]);
;
 //# sourceMappingURL=ellipsis.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "MoreHorizontal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/forward.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "default": (()=>Forward)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Forward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Forward", [
    [
        "polyline",
        {
            points: "15 17 20 12 15 7",
            key: "1w3sku"
        }
    ],
    [
        "path",
        {
            d: "M4 18v-2a4 4 0 0 1 4-4h12",
            key: "jmiej9"
        }
    ]
]);
;
 //# sourceMappingURL=forward.js.map
}}),
"[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/forward.js [app-ssr] (ecmascript) <export default as Forward>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Forward": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/forward.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=%5Bproject%5D__c552f6._.js.map