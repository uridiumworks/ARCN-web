import {
  ContentManagementIcon,
  DashboardIcon,
  EventIcon,
  HealthIcon,
  LogoutIcon,
  MarketResearchIcon,
  SettingsIcon,
  UserIcon,
} from "@/assets/icons";
import { SideLinkType } from "./SidebarLinkType";
import { DotIcon } from "lucide-react";

export const SideLink: Array<SideLinkType> = [
  {
    name: "Dashboard",
    url: "/admin",
    icon: <DashboardIcon className="scale-95 text-[#fff]" />,
  },
  {
    name: "Content Management",
    url: "/admin/content-management",
    icon: <ContentManagementIcon className="scale-95 text-[#fff]" />,
  },
  {
    name: "Events",
    url: "/admin/events",
    icon: <EventIcon className="scale-95 stroke-[white]" />,
  },
  {
    name: "Research",
    url: "/admin/research",
    icon: <MarketResearchIcon className="scale-95 stroke-[#fff]" />,
  },
  {
    name: "Training",
    url: "/admin/training",
    icon: <HealthIcon className="scale-95 text-[#fff]" />,
  },
  // {
  //   name: "Extension",
  //   url: "/admin/extension",
  //   icon: <MarketResearchIcon className="scale-95 stroke-[#fff]" />,
  // },
  {
    name: "Programs and Projects",
    url: "/admin/programs-and-projects",
    icon: <MarketResearchIcon className="scale-95 stroke-[#fff]" />,
  },
  {
    name: "Users",
    url: "/admin/users",
    icon: <UserIcon className="scale-95 text-[white]" />,
  },
];

export const BottomSideLink: Array<SideLinkType> = [
  {
    name: "Settings",
    url: "/admin/settings",
    icon: <SettingsIcon className="scale-95 text-white" />,
  },
  {
    name: "Logout",
    url: "/",
    icon: (
      <LogoutIcon
        className="scale-95 text-white"
      />
    ),
  },
];

export const SideLinkDropdown: Array<SideLinkType> = [
  {
    name: "Blogs",
    url: "/admin/content-management/blogs",
    icon: <DotIcon strokeWidth={5} />,
  },
  {
    name: "Journals",
    url: "/admin/content-management/journals",
    icon: <DotIcon strokeWidth={5} />,
  },
  {
    name: "Newsletters",
    url: "/admin/content-management/news-letters",
    icon: <DotIcon strokeWidth={5} />,
  },
  {
    name: "Reports",
    url: "/admin/content-management/reports",
    icon: <DotIcon strokeWidth={5} />,
  },
];
