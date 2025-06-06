"use client"

import * as React from "react"
import {
  BookOpenCheck,
  FolderOpen,
  Mails,
} from "lucide-react"
import { MdSpaceDashboard } from "react-icons/md";
import { FaTimeline } from "react-icons/fa6";
import { RiSettings3Fill } from "react-icons/ri";
import { NavMain } from "@/components/ui/nav-main"
import { NavUser } from "@/components/ui/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Logo from "./logo"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
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
      title: "Messages",
      url: "/messages",
      icon: Mails,
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
        <Logo />
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
