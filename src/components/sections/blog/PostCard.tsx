"use client";

import { ModernCard } from "@/components/ui/ModernCard";
import { cn } from "@/lib/utils";

export type PostItem = {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  author?: string;
  categories?: string[];
  thumbnail: string;
  description?: string;
  excerpt: string;
};

export function PostCard({
  post,
  className,
}: {
  post: PostItem;
  className?: string;
}) {
  return (
    <ModernCard
      className={cn(
        "group h-full overflow-hidden border hover:border-[var(--button-border)]",
        className
      )}
      hoverEffect
      glowEffect
    >
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col no-underline"
        aria-label={`Read blog: ${post.title}`}
      >
        {/* Media */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden"
          style={{ backgroundColor: "var(--muted)" }}
        >
          {post.thumbnail ? (
            // Use native img to avoid external domain restrictions during static export
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.thumbnail}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-[1.03]"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/placeholder.svg"
              alt="Placeholder"
              className="h-full w-full object-cover opacity-80"
              loading="lazy"
            />
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--card-background)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
          <div
            className="flex items-center gap-2 text-xs opacity-80"
            style={{ color: "var(--paragraph)" }}
          >
            {post.pubDate && <span>{post.pubDate}</span>}
            {post.author && (
              <>
                <span>•</span>
                <span>{post.author}</span>
              </>
            )}
          </div>

          <h3
            className="font-figtree text-base font-semibold leading-snug tracking-tight"
            style={{ color: "var(--headline)" }}
            title={post.title}
          >
            {post.title}
          </h3>

          {post.excerpt && (
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--paragraph)" }}
            >
              {post.excerpt}
            </p>
          )}

          {post.categories && post.categories.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-2">
              {post.categories.slice(0, 3).map((c) => (
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
        </div>
      </a>
    </ModernCard>
  );
}

export function PostCardSkeleton() {
  return (
    <div
      className="h-full overflow-hidden rounded-xl border"
      style={{ borderColor: "var(--card-border-color)", backgroundColor: "var(--card-background)" }}
    >
      <div className="aspect-[16/9] w-full animate-pulse" style={{ backgroundColor: "var(--muted)" }} />
      <div className="p-4 sm:p-5">
        <div className="mb-2 h-3 w-24 animate-pulse rounded" style={{ backgroundColor: "var(--muted)" }} />
        <div className="mb-2 h-5 w-3/4 animate-pulse rounded" style={{ backgroundColor: "var(--muted)" }} />
        <div className="mb-2 h-4 w-full animate-pulse rounded" style={{ backgroundColor: "var(--muted)" }} />
        <div className="h-4 w-5/6 animate-pulse rounded" style={{ backgroundColor: "var(--muted)" }} />
      </div>
    </div>
  );
}

export default PostCard;
