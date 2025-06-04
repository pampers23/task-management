"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpenCheck,
  FolderOpen,
  Command,
  GalleryVerticalEnd,
} from "lucide-react"
import { MdSpaceDashboard } from "react-icons/md";
import { FaTimeline } from "react-icons/fa6";
import { RiSettings3Fill } from "react-icons/ri";
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/leerob.png",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: MdSpaceDashboard,
      isActive: true,
    },
    {
      title: "Timeline",
      url: "/timeline",
      icon: FaTimeline,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: BookOpenCheck,
    },
        {
      title: "Files",
      url: "/files",
      icon: FolderOpen,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: RiSettings3Fill,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
