import type { Icon } from "lucide-react";

export type NavItem = {
  title: DynamicTitle;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type NavigationConfig = {
  mainNav: MainNavItem[];
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  creator: { name: string; url: string };
  keywords: string[];
  links: {
    github: string;
  };
};

export type FileContent = {
  fileName: string;
  content: string;
};

export type FileContents = FileContent[];

export type ComponentDetails = {
  title: string;
  desc: string;
  tags: string[];
  published: boolean;
  date: string;
};



