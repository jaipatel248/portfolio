"use client";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
import Folder from "../ui/Folder";
import { MagicCard } from "../ui/MagicCard";

interface Paper {
  title: string;
  link: string;
}

interface ReusableCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  title?: string;
  date?: string;
  description?: string;
  skills?: string[];
  websiteLink?: string;
  githubLink?: string;
  t?: (key: string) => string;
  linkStyle?: string;
  img?: string;
  coverImg?: string;
  suptitle?: string;
  papers?: Paper[];
}

const ReusableCard = React.forwardRef<HTMLDivElement, ReusableCardProps>(
  (
    {
      id,
      title,
      date,
      description,
      skills = [],
      websiteLink,
      githubLink,
      t = (key: string) => key,
      linkStyle = "",
      img,
      coverImg,
      suptitle,
      className,
      papers = [],
      ...props
    },
    ref
  ) => {
    return (
      <Link
        href={websiteLink || githubLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--card-headline)] transition-colors hover:text-[var(--link-hover)] flex items-center"
      >
        <MagicCard
          gradientColor="#7e7e7e12"
          ref={ref}
          className={cn(
            "group overflow-hidden transition-all duration-300",
            "border-[var(--card-border-color)] bg-[var(--card-background)]",
            className
          )}
          {...props}
        >
          {coverImg && (
            <div className="relative w-full h-52 overflow-hidden rounded-t-md">
              <div
                className="absolute inset-0 bg-cover bg-center blur-[100px]"
                style={{ backgroundImage: `url(${coverImg})` }}
              ></div>
              <img
                src={coverImg}
                alt={title ? `${title} - Cover Image` : "Cover Image"}
                className="w-full h-full object-contain z-50 transition-transform duration-300 rounded-[12px] scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/400x225?text=Loading...";
                }}
              />
            </div>
          )}

          <CardHeader className="p-4 flex flex-col items-start justify-between space-y-3">
            <div className="flex flex-col space-y-2">
              {title && (
                <CardTitle className="text-lg font-semibold">
                  <span>{title}</span>
                </CardTitle>
              )}
              {suptitle && (
                <CardDescription className="text-sm text-[var(--card-paragraph)]">
                  {suptitle}
                </CardDescription>
              )}
            </div>

            {date && (
              <CardDescription className="flex items-center justify-between text-sm text-[var(--card-paragraph)]">
                <span>{date}</span>
                {img && (
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={img}
                      alt={title ? `${title} - Profile Image` : "Profile Image"}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/100?text=Profile";
                      }}
                    />
                  </div>
                )}
              </CardDescription>
            )}
          </CardHeader>

          {description && (
            <CardContent className="p-4">
              <p className="text-sm text-[var(--card-paragraph)]">
                {description}
              </p>
            </CardContent>
          )}

          <CardFooter className="p-4 flex flex-col gap-4 sm:flex-row items-start sm:items-center justify-between">
            {skills && skills.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-2">
                {skills.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border px-2 py-0.5 text-xs"
                    style={{
                      borderColor: "var(--card-border-color)",
                      color: "var(--paragraph)",
                      backgroundColor: "var(--card-background)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
            <div
              className="mt-3 flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--paragraph)" }}
            >
              <span>Read article</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link"
                aria-hidden="true"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </div>

            {papers.length > 0 && (
              <div className="flex flex-col items-center space-y-1">
                <Folder items={papers} size={0.8} color="#7f5af0" />
              </div>
            )}
          </CardFooter>
        </MagicCard>
      </Link>
    );
  }
);

ReusableCard.displayName = "ReusableCard";

export default ReusableCard;
