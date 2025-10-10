"use client";

import { useEffect, useState } from "react";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaEnvelope, FaMedium, FaStackOverflow } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiDailydotdev, SiGithub, SiLeetcode } from "react-icons/si";

export interface SocialLink {
  _id: string;
  platform: string;
  url: string;
  icon: IconType;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface UseSocialLinksReturn {
  socialLinks: SocialLink[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const mockSocialLinks: SocialLink[] = [
  {
    _id: "2",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/jaipatel248/",
    icon: BsLinkedin,
    isActive: true,
    order: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "1",
    platform: "GitHub",
    url: "https://github.com/jaipatel248/",
    icon: SiGithub,
    isActive: true,
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "6",
    platform: "LeetCode",
    url: "https://leetcode.com/u/jai248/",
    icon: SiLeetcode,
    isActive: true,
    order: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    platform: "Stack Overflow",
    url: "https://stackoverflow.com/users/16924632/jai248",
    icon: FaStackOverflow,
    isActive: true,
    order: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "7",
    platform: "Daily.dev",
    url: "https://app.daily.dev/jaipatel",
    icon: SiDailydotdev,
    isActive: true,
    order: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "6",
    platform: "Medium",
    url: "https://medium.com/@jaipatel248",
    icon: FaMedium,
    isActive: true,
    order: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "4",
    platform: "Email Me",
    url: "mailto:jaypatel248@zohomail.in",
    icon: FaEnvelope,
    isActive: true,
    order: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "5",
    platform: "WhatsApp",
    url: "https://wa.me/919999999999",
    icon: AiOutlineWhatsApp,
    isActive: false,
    order: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function useSocialLinks(
  activeOnly: boolean = true
): UseSocialLinksReturn {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSocialLinks = async () => {
    try {
      setLoading(true);
      setError(null);

      const links = activeOnly
        ? mockSocialLinks.filter((link) => link.isActive)
        : mockSocialLinks;

      setSocialLinks(links);
    } catch {
      setError("Failed to load social links");
      setSocialLinks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSocialLinks();
  }, [activeOnly]);

  return {
    socialLinks,
    loading,
    error,
    refetch: fetchSocialLinks,
  };
}
