import {
  Search,
  FileText,
  Database,
  Lock,
  Home,
  Settings,
  Calendar,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home - Court Filing Management", icon: Home, url: "/" },
  { title: "AI Document Generation(Filings)", icon: FileText, url: "/courtney-sessions/documents" },
  { title: "Calendar", icon: Calendar, url: "/calendar" },
  { title: "Attorneys", icon: FileText, url: "/attorneys" },
  { title: "Legal AI Research", icon: Search, url: "/research" },
  { title: "Reports", icon: Database, url: "/reports" },
  { title: "Integrations", icon: Lock, url: "/integrations" },
  // { title: "Settings", icon: Settings, url: "/settings" },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center cursor-pointer hover:bg-slate-100 gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}