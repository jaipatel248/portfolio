"use client";

import { usePosts } from "@/hooks/use-posts";
import { PostCard, PostCardSkeleton } from "./PostCard";

export default function PostsList() {
  const { posts, loading, error, reload } = usePosts();

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
      {loading && Array.from({ length: 6 }).map((_, i) => <PostCardSkeleton key={`ps-${i}`} />)}
      {!loading && !error && posts.length > 0 && posts.map((p) => <PostCard key={p.id} post={p} />)}
      {!loading && (error || posts.length === 0) && (
        <div
          className="col-span-full rounded-xl border p-6 text-center"
          style={{ borderColor: "var(--card-border-color)", backgroundColor: "var(--card-background)" }}
        >
          <p className="text-sm" style={{ color: "var(--paragraph)" }}>
            {error ? "Failed to load posts." : "No posts available right now."}
          </p>
          {error && (
            <button
              className="mt-3 text-sm underline"
              style={{ color: "var(--link-color)" }}
              onClick={reload}
            >
              Try again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
