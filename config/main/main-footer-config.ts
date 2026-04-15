import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/socials";
import { FooterType } from "@/types";
import { default as mainCategoryConfig } from "./main-category-config";

const mainFooterConfig: FooterType = {
  categories: mainCategoryConfig,
  pages: [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "About",
      slug: "/about",
    },
    {
      title: "Contact",
      slug: "/contact",
    },
  ],

  socials: [
    {
      name: "Facebook",
      url: "#",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      url: "#",
      icon: InstagramIcon,
    },
    {
      name: "Twitter",
      url: "#",
      icon: TwitterIcon,
    },
    {
      name: "Youtube",
      url: "#",
      icon: YoutubeIcon,
    },
  ],
  legals: [
    {
      title: "Terms",
      slug: "/terms",
    },
    {
      title: "Policy",
      slug: "/policy",
    },
  ],
  copyright: "© 2026 [SITE_NAME]. All rights reserved.",
};

export default mainFooterConfig;
