import { siteConfig } from "./site";

export const navItems = [
  { label: "시설", href: "#facilities" },
  { label: "월대여 장점", href: "#benefits" },
  { label: "룸 타입", href: "#rooms" },
  { label: "배치도", href: "#floorplan" },
  { label: "이용방법", href: "#guide" },
  { label: "위치", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export const quickLinks = [
  { label: "시설 안내", href: "#facilities" },
  { label: "이용 요금", href: "#rooms" },
  { label: "오시는 길", href: "#location" },
];

export const supportLinks = [
  { label: "자주 묻는 질문", href: "#faq" },
  { label: "1:1 문의", href: "#" },
  { label: "이용 수칙", href: "#" },
];

export const legalLinks = [
  { label: "개인정보처리방침", href: "#" },
  { label: "이용약관", href: "#" },
];

export const socialLinks = [
  {
    name: "Instagram",
    url: siteConfig.social.instagram,
    icon: "instagram",
  },
  {
    name: "Blog",
    url: siteConfig.social.blog,
    icon: "blog",
  },
];

