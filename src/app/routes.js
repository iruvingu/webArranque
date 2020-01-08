import Home from './views/home'
import EffortCalculation from './views/effort_calculation'
import PageSettings from './views/page_settings'
import PaoChat from './views/pao_chat'
import Presentation from './views/presentations'
import QuickStart from './views/quick_start'
import SmartManage from './views/smart_manage'

const routes = [
    {
        path: "/home",
        name: "Home",
        icon: "home",
        component: Home,
        layout: "/admin",
        enable: true
    },
    {
        path: "/arranque-rapido",
        name: "Arranque Rápido",
        icon: "insert_chart",
        component: QuickStart,
        layout: "/admin",
        enable: true
    },
    {
        path: "/presentaciones-inicio",
        name: "Presentaciones de Inicio",
        icon: "present_to_all",
        component: Presentation,
        layout: "/admin",
        enable: false
    },
    {
        path: "/gestion-inteligente",
        name: "Gestión Inteligente",
        icon: "perm_data_setting",
        component: SmartManage,
        layout: "/admin",
        enable: false
    },
    {
        path: "/chat-pao",
        name: "Chat PAO",
        icon: "chat",
        component: PaoChat,
        layout: "/admin",
        enable: false
    },
    {
        path: "/calcula-esfuerzo",
        name: "Cálcula mi esfuerzo",
        icon: "assesment",
        component: EffortCalculation,
        layout: "/admin",
        enable: false
    },
    {
        path: "/settings",
        name: "Configuración",
        icon: "settings",
        component: PageSettings,
        layout: "/admin",
        enable: false
    },
]

export default routes