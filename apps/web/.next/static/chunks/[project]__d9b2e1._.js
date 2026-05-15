(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]__d9b2e1._.js", {

"[project]/tests/fixtures/emails.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"id\":\"msg_1\",\"externalId\":\"ext_1\",\"accountId\":\"acc_1\",\"threadId\":\"thread_1\",\"subject\":\"Q3 Board Deck Review\",\"from\":{\"name\":\"Sarah Chen\",\"email\":\"sarah@acmecorp.com\"},\"to\":[{\"name\":\"You\",\"email\":\"you@inboxos.com\"}],\"cc\":[],\"bcc\":[],\"body\":{\"html\":\"<p>Hi team, please review the attached Q3 board deck before our meeting tomorrow at 10 AM. Pay special attention to the revenue slides.</p>\",\"text\":\"Hi team, please review the attached Q3 board deck before our meeting tomorrow at 10 AM. Pay special attention to the revenue slides.\"},\"snippet\":\"Hi team, please review the attached Q3 board deck before our meeting tomorrow...\",\"labels\":[{\"id\":\"label_inbox\",\"name\":\"Inbox\",\"type\":\"system\"}],\"attachments\":[],\"receivedAt\":\"2026-05-14T08:30:00.000Z\",\"isRead\":false,\"isStarred\":true,\"priority\":{\"score\":95,\"tier\":\"critical\",\"reason\":\"Direct request from CEO regarding board meeting\",\"signals\":[],\"calculatedAt\":\"2026-05-14T08:30:05.000Z\"},\"aiSummary\":null,\"syncStatus\":\"synced\"},{\"id\":\"msg_2\",\"externalId\":\"ext_2\",\"accountId\":\"acc_1\",\"threadId\":\"thread_2\",\"subject\":\"Your AWS Invoice is Ready\",\"from\":{\"name\":\"AWS Billing\",\"email\":\"no-reply-aws@amazon.com\"},\"to\":[{\"name\":\"You\",\"email\":\"you@inboxos.com\"}],\"cc\":[],\"bcc\":[],\"body\":{\"html\":\"<p>Your invoice for the period of April 2026 is available.</p>\",\"text\":\"Your invoice for the period of April 2026 is available.\"},\"snippet\":\"Your invoice for the period of April 2026 is available.\",\"labels\":[{\"id\":\"label_inbox\",\"name\":\"Inbox\",\"type\":\"system\"}],\"attachments\":[],\"receivedAt\":\"2026-05-13T14:15:00.000Z\",\"isRead\":true,\"isStarred\":false,\"priority\":{\"score\":30,\"tier\":\"low\",\"reason\":\"Automated billing notification\",\"signals\":[],\"calculatedAt\":\"2026-05-13T14:15:05.000Z\"},\"aiSummary\":null,\"syncStatus\":\"synced\"},{\"id\":\"msg_3\",\"externalId\":\"ext_3\",\"accountId\":\"acc_1\",\"threadId\":\"thread_3\",\"subject\":\"Weekly Engineering Sync\",\"from\":{\"name\":\"David Park\",\"email\":\"david@acmecorp.com\"},\"to\":[{\"name\":\"Engineering Team\",\"email\":\"eng@acmecorp.com\"}],\"cc\":[],\"bcc\":[],\"body\":{\"html\":\"<p>Agenda for today's sync: 1. Monorepo migration status. 2. CI/CD pipeline improvements.</p>\",\"text\":\"Agenda for today's sync: 1. Monorepo migration status. 2. CI/CD pipeline improvements.\"},\"snippet\":\"Agenda for today's sync: 1. Monorepo migration status...\",\"labels\":[{\"id\":\"label_inbox\",\"name\":\"Inbox\",\"type\":\"system\"}],\"attachments\":[],\"receivedAt\":\"2026-05-14T09:00:00.000Z\",\"isRead\":false,\"isStarred\":false,\"priority\":{\"score\":60,\"tier\":\"normal\",\"reason\":\"Team-wide meeting agenda\",\"signals\":[],\"calculatedAt\":\"2026-05-14T09:00:05.000Z\"},\"aiSummary\":null,\"syncStatus\":\"synced\"}]"));}}),
"[project]/apps/web/src/stores/use-mail-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useMailStore": (()=>useMailStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$tests$2f$fixtures$2f$emails$2e$json__$28$json$29$__ = __turbopack_import__("[project]/tests/fixtures/emails.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$18$2e$3$2e$28_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@4.5.7_@types+react@18.3.28_react@19.0.0-rc-66855b96-20241106/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
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
const useMailStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$18$2e$3$2e$28_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/components/sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Sidebar": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Sidebar({ onNavigate }) {
    _s();
    const { filter, setFilter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"])();
    const navItems = [
        {
            id: 'inbox',
            label: 'Inbox',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"]
        },
        {
            id: 'starred',
            label: 'Starred',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
        },
        {
            id: 'sent',
            label: 'Sent',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"]
        },
        {
            id: 'drafts',
            label: 'Drafts',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            id: 'trash',
            label: 'Trash',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"]
        }
    ];
    const handleNav = (id)=>{
        setFilter(id);
        onNavigate?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-full md:w-[260px] lg:w-[280px] bg-zinc-50/80 dark:bg-[#121212] border-r border-zinc-200/60 dark:border-zinc-800/60 flex flex-col h-full selection:bg-indigo-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-16 flex items-center px-4 pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center gap-3 w-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 p-2 rounded-xl transition-all duration-200 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow",
                            children: "Y"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/sidebar.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1 text-left font-medium text-sm text-zinc-900 dark:text-zinc-100 truncate",
                            children: "you@inboxos.com"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/sidebar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: {
                        scale: 1.01
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    className: "w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded-xl flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-colors shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-2 space-y-0.5 overflow-y-auto",
                children: navItems.map((item)=>{
                    const Icon = item.icon;
                    const isActive = filter === item.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNav(item.id),
                        className: "relative w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors group",
                        children: [
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("w-[18px] h-[18px] relative z-10 transition-colors", isActive ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative z-10 font-medium transition-colors", isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/sidebar.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this),
                            item.id === 'inbox' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative z-10 ml-auto text-xs font-semibold px-2 py-0.5 rounded-full transition-colors", isActive ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300" : "bg-zinc-200/50 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"),
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800/50 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
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
_s(Sidebar, "bTIzw2PsDT3rFeGvtyACob9/QVY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_refresh__.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/components/thread-list.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ThreadList": (()=>ThreadList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
// Hydration-safe time formatter
function formatTime(date) {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric'
    }).format(date);
}
function ThreadList() {
    _s();
    const { emails, selectedEmailId, selectEmail, filter, searchQuery, setSearchQuery } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreadList.useEffect": ()=>{
            setMounted(true);
        }
    }["ThreadList.useEffect"], []);
    const filteredEmails = emails.filter((email)=>{
        if (searchQuery && !email.subject.toLowerCase().includes(searchQuery.toLowerCase()) && !(email.from.name || '').toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        if (filter === 'inbox') return true;
        if (filter === 'starred') return email.isStarred;
        return false;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-zinc-50/50 dark:bg-[#0c0c0e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-16 flex items-center px-4 md:px-5 border-b border-zinc-200/50 dark:border-zinc-800/50 flex-shrink-0 bg-white/80 dark:bg-[#0c0c0e]/80 backdrop-blur-md z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-semibold text-[15px] tracking-tight capitalize text-zinc-900 dark:text-zinc-100",
                    children: filter
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/thread-list.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pt-3 pb-2 z-10 sticky top-0 bg-zinc-50/90 dark:bg-[#0c0c0e]/90 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-y-0 left-3 flex items-center pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "h-4 w-4 text-zinc-400 dark:text-zinc-500 group-focus-within:text-indigo-500 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/thread-list.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "block w-full pl-9 pr-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all shadow-sm",
                            placeholder: "Search emails...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/thread-list.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-y-0 right-3 flex items-center pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium text-zinc-400 dark:text-zinc-500 border dark:border-zinc-700 px-1.5 rounded bg-zinc-50 dark:bg-zinc-800",
                                children: "↵"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/thread-list.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/thread-list.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: filteredEmails.map((email)=>{
                            const isSelected = email.id === selectedEmailId;
                            const isCritical = email.priority?.tier === 'critical';
                            const isUnread = !email.isRead;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                layout: true,
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                whileHover: {
                                    scale: 1.01
                                },
                                whileTap: {
                                    scale: 0.99
                                },
                                onClick: ()=>selectEmail(email.id),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("w-full text-left p-3.5 rounded-xl transition-all relative flex flex-col gap-1.5 shadow-sm group", isSelected ? "bg-indigo-50/80 dark:bg-indigo-500/10 border-indigo-200/60 dark:border-indigo-500/30 border ring-1 ring-indigo-500/20 dark:ring-indigo-500/10" : "bg-white dark:bg-[#121214] hover:bg-zinc-50 dark:hover:bg-[#18181b] border border-zinc-200/40 dark:border-zinc-800/60"),
                                children: [
                                    isUnread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-5 left-2.5 w-[7px] h-[7px] bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline justify-between pl-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-[14px] truncate max-w-[70%]", isUnread ? "font-bold text-zinc-900 dark:text-zinc-50" : "font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors"),
                                                children: email.from.name || email.from.email
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-[11px] whitespace-nowrap tabular-nums", isUnread ? "text-indigo-600 dark:text-indigo-400 font-semibold" : "text-zinc-400 dark:text-zinc-500"),
                                                children: mounted ? formatTime(email.receivedAt) : "--:--"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 pl-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-[13px] truncate tracking-tight", isUnread ? "font-semibold text-zinc-900 dark:text-zinc-100" : "font-medium text-zinc-500 dark:text-zinc-400"),
                                                children: email.subject
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            isCritical && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-rose-100/80 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400 text-[9px] tracking-wider uppercase font-bold px-1.5 py-0.5 rounded shadow-sm flex-shrink-0",
                                                children: "Urgent"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12.5px] leading-relaxed text-zinc-500 dark:text-zinc-500 line-clamp-2 pl-3 mt-0.5 font-normal",
                                        children: email.snippet
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, email.id, true, {
                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/thread-list.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    mounted && filteredEmails.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "flex flex-col items-center justify-center h-48 text-zinc-500 py-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-200/50 dark:border-zinc-800/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "w-5 h-5 text-zinc-400"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] font-medium text-zinc-700 dark:text-zinc-300",
                                children: "No emails found"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] mt-1 text-zinc-500",
                                children: "Try adjusting your search or filters."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/thread-list.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/thread-list.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/thread-list.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ThreadList, "iCdkrKKjVYwlzxmDnNZQ8P9XffE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"]
    ];
});
_c = ThreadList;
var _c;
__turbopack_refresh__.register(_c, "ThreadList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/components/email-detail.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "EmailDetail": (()=>EmailDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/reply.js [app-client] (ecmascript) <export default as Reply>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/forward.js [app-client] (ecmascript) <export default as Forward>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function formatFullDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }).format(date);
}
function EmailDetail({ onBack }) {
    _s();
    const { emails, selectedEmailId, archiveEmail, deleteEmail } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"])();
    const email = emails.find((e)=>e.id === selectedEmailId);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailDetail.useEffect": ()=>{
            setMounted(true);
        }
    }["EmailDetail.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col h-full bg-white dark:bg-[#09090b] overflow-hidden relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: !email ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.98
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: 0.98
                },
                transition: {
                    duration: 0.4,
                    ease: "easeOut"
                },
                className: "absolute inset-0 flex flex-col items-center justify-center bg-zinc-50/50 dark:bg-[#09090b]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-indigo-500/20 dark:bg-indigo-500/10 blur-2xl rounded-full scale-150 animate-pulse transition-transform duration-1000"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-[24px] bg-gradient-to-br from-indigo-50/80 to-blue-50/80 dark:from-indigo-900/30 dark:to-blue-900/10 flex items-center justify-center border border-indigo-100/50 dark:border-indigo-500/20 shadow-xl shadow-indigo-500/5 relative overflow-hidden backdrop-blur-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-tr from-indigo-400/20 to-transparent dark:from-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-8 h-8 text-indigo-600 dark:text-indigo-400 relative z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[20px] font-semibold text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight",
                        children: "Select a conversation"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[14px] text-zinc-500 dark:text-zinc-400 text-center max-w-[320px] leading-relaxed",
                        children: "InboxOS AI will summarize threads, prioritize actions, and help draft intelligent replies."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this)
                ]
            }, "empty-state", true, {
                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 15
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -10
                },
                transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 200
                },
                className: "flex flex-col h-full absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 flex items-center justify-between px-4 md:px-6 border-b border-zinc-200/60 dark:border-zinc-800/60 flex-shrink-0 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onBack,
                                        className: "md:hidden p-2 mr-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-lg border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>archiveEmail(email.id),
                                                className: "p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-white dark:hover:text-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-all shadow-none hover:shadow-sm",
                                                title: "Archive (E)",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                                    className: "w-[18px] h-[18px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>deleteEmail(email.id),
                                                className: "p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-white dark:hover:text-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-all shadow-none hover:shadow-sm",
                                                title: "Delete (#)",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-[18px] h-[18px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-white dark:hover:text-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-all shadow-none hover:shadow-sm",
                                                title: "Snooze (S)",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-[18px] h-[18px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-1.5 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 dark:from-indigo-500/10 dark:to-blue-500/5 rounded-xl border border-indigo-100/50 dark:border-indigo-500/20 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-2 px-3 py-1.5 text-[13px] font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-white/60 dark:hover:bg-indigo-500/20 rounded-lg transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-[14px] h-[14px]"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            "Summarize"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[1px] h-4 bg-indigo-200/50 dark:bg-indigo-500/20 mx-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "group relative flex items-center gap-2 px-4 py-1.5 text-[13px] font-bold bg-white dark:bg-[#18181b] text-indigo-600 dark:text-indigo-400 rounded-lg shadow-sm border border-indigo-100 dark:border-indigo-500/30 transition-all hover:shadow hover:text-indigo-700 dark:hover:text-indigo-300 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 dark:via-indigo-500/10 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-[14px] h-[14px] relative z-10"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10",
                                                children: "Draft Reply"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hidden sm:flex items-center gap-2 px-3 py-1.5 text-[13px] font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-white/60 dark:hover:bg-indigo-500/20 rounded-lg transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-[14px] h-[14px]"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            "Prioritize"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto overflow-x-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[720px] mx-auto py-10 px-6 md:px-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    layoutId: `subject-${email.id}`,
                                    className: "text-[28px] font-bold tracking-tight leading-snug mb-10 text-zinc-900 dark:text-zinc-50",
                                    children: email.subject
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-12 pb-6 border-b border-zinc-100 dark:border-zinc-800/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-indigo-900/40 dark:to-blue-900/20 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-lg border border-indigo-200/50 dark:border-indigo-500/20 shadow-sm",
                                                    children: (email.from.name || email.from.email).charAt(0).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-[15px] text-zinc-900 dark:text-zinc-100",
                                                                    children: email.from.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[13px] text-zinc-500 dark:text-zinc-400 font-medium tracking-tight bg-zinc-100/50 dark:bg-zinc-800/50 px-2 py-0.5 rounded-md",
                                                                    children: email.from.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[13px] text-zinc-500 dark:text-zinc-500",
                                                            children: [
                                                                "to ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-zinc-700 dark:text-zinc-300",
                                                                    children: email.to.map((t)=>t.name || t.email).join(', ')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 28
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-end gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[13px] text-zinc-400 dark:text-zinc-500 font-medium tracking-tight",
                                                    children: mounted ? formatFullDate(email.receivedAt) : "Loading date..."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__["Reply"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 178
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 178
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-zinc dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-[15px] prose-p:text-zinc-800 dark:prose-p:text-zinc-300 prose-a:text-indigo-600 dark:prose-a:text-indigo-400",
                                    dangerouslySetInnerHTML: {
                                        __html: email.body.html
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-20 pt-6 flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-2.5 px-6 py-2.5 text-[14px] font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-zinc-900/10 dark:shadow-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__["Reply"], {
                                                    className: "w-[18px] h-[18px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this),
                                                " Reply"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-2.5 px-6 py-2.5 text-[14px] font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181b] text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__["Forward"], {
                                                    className: "w-[18px] h-[18px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this),
                                                " Forward"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/email-detail.tsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/email-detail.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/email-detail.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this)
                ]
            }, email.id, true, {
                fileName: "[project]/apps/web/src/components/email-detail.tsx",
                lineNumber: 53,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/email-detail.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/email-detail.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(EmailDetail, "k5FGmcp+ew9oeiKOtZEwMnJCWrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"]
    ];
});
_c = EmailDetail;
var _c;
__turbopack_refresh__.register(_c, "EmailDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/components/ai-brief.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AIInboxBrief": (()=>AIInboxBrief)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function AIInboxBrief() {
    _s();
    const { emails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"])();
    const unreadCount = emails.filter((e)=>!e.isRead).length;
    const criticalCount = emails.filter((e)=>e.priority?.tier === 'critical').length;
    if (emails.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-0.5 flex-shrink-0 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-indigo-400 blur-md opacity-30 dark:opacity-50 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight",
                                children: "AI Inbox Brief"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ai-brief.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed",
                                children: [
                                    "Good morning. You have ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
_s(AIInboxBrief, "2yCP80Lc7xMp0WOTk2u4WmRV3ys=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"]
    ];
});
_c = AIInboxBrief;
var _c;
__turbopack_refresh__.register(_c, "AIInboxBrief");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-mounted.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useMounted": (()=>useMounted)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
function useMounted() {
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMounted.useEffect": ()=>{
            setIsMounted(true);
        }
    }["useMounted.useEffect"], []);
    return isMounted;
}
_s(useMounted, "h7njlszr1nxUzrk46zHyBTBrvgI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/stores/use-mail-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/components/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$thread$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/components/thread-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$email$2d$detail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/components/email-detail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ai$2d$brief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/components/ai-brief.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$mounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/web/src/hooks/use-mounted.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$14_next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$_pnuikj5m7f254ltwkhwpauuhpa$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@4.24.14_next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-_pnuikj5m7f254ltwkhwpauuhpa/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_aeq5z5ewri2y2j4lsi6kh7wfia/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.378.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_refresh__.signature();
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
    _s();
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$mounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$14_next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$_pnuikj5m7f254ltwkhwpauuhpa$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { selectedEmailId, selectEmail } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prevent SSR flash
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen bg-[#09090b]"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/page.tsx",
            lineNumber: 22,
            columnNumber: 12
        }, this);
    }
    // Cinematic Login Screen
    if (status === "unauthenticated") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full bg-[#09090b] flex flex-col items-center justify-center relative overflow-hidden selection:bg-indigo-500/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#09090b] to-[#09090b]"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    },
                    className: "relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-10 group cursor-default",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full scale-150 animate-pulse duration-3000"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-3xl bg-gradient-to-b from-indigo-500/20 to-[#09090b] border border-indigo-500/30 flex items-center justify-center backdrop-blur-xl relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-tr from-indigo-400/20 to-transparent opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-10 h-10 text-indigo-400 relative z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-semibold tracking-tight text-zinc-100 mb-4",
                            children: "InboxOS"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-400 text-[15px] leading-relaxed mb-12",
                            children: "The premium AI-native email experience. Summarize threads, draft intelligent replies, and prioritize your focus."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$14_next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$_pnuikj5m7f254ltwkhwpauuhpa$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("google"),
                            className: "group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-[15px] font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] active:scale-[0.98]",
                            children: "Continue with Google"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/page.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    // Loading Session
    if (status === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full bg-[#09090b] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/page.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this);
    }
    // Authenticated 3-pane Layout
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed top-0 w-full h-14 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 z-50 flex items-center px-4 justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileMenuOpen(true),
                        className: "p-2 -ml-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$378$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm tracking-tight",
                        children: "InboxOS"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block shrink-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_aeq5z5ewri2y2j4lsi6kh7wfia$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "md:hidden fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-[#09090b] z-50 shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                                onNavigate: ()=>setMobileMenuOpen(false)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden relative pt-14 md:pt-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
          flex flex-col h-full shrink-0 border-r border-zinc-200 dark:border-zinc-800/60 bg-zinc-50/30 dark:bg-zinc-950/50
          absolute inset-0 md:relative md:w-[360px] lg:w-[400px] z-10
          transition-transform duration-300 ease-in-out
          ${selectedEmailId ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
        `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ai$2d$brief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIInboxBrief"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$thread$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThreadList"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
          flex-1 h-full bg-white dark:bg-[#09090b] z-20 absolute inset-0 md:relative
          transition-transform duration-300 ease-in-out
          ${selectedEmailId ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$email$2d$detail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailDetail"], {
                            onBack: ()=>selectEmail(null)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(Home, "70w0b2sfImUeQxIhIgokTQUgK1g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$mounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$14_next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$_pnuikj5m7f254ltwkhwpauuhpa$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$use$2d$mail$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMailStore"]
    ];
});
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=%5Bproject%5D__d9b2e1._.js.map