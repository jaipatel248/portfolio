"use client";

import { usePosts } from "@/hooks/use-posts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { Button } from "../../ui";
import { PostCard, PostCardSkeleton } from "./PostCard";

export default function PostSection() {
  const { posts, loading, error } = usePosts({ limit: 6 });
  const previewPosts = useMemo(() => posts, [posts]);

  return (
    <section className='' style={{ backgroundColor: "var(--background)" }}>
      <div className='w-full'>
        <div
          className='text-left mb-6 sm:mb-8  pt-6'
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className='text-sm sm:text-base'
            style={{ color: "var(--paragraph)" }}
          >
            Here are some{" "}
            <span className='font-medium' style={{ color: "var(--headline)" }}>
              blogs
            </span>{" "}
            I've written
          </p>
        </div>

        <div className='flex flex-col gap-2 sm:gap-3'>
          {/* Grid */}
          <div className='grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {loading &&
              Array.from({ length: 3 }).map((_, i) => (
                <PostCardSkeleton key={`s-${i}`} />
              ))}

            {!loading &&
              !error &&
              previewPosts.length > 0 &&
              previewPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>

          {/* Empty/Error states */}
          {!loading &&
            ((error ?? null) !== null || previewPosts.length === 0) && (
              <div
                className='rounded-xl border p-6 text-center'
                style={{
                  borderColor: "var(--card-border-color)",
                  backgroundColor: "var(--card-background)",
                }}
              >
                <p className='text-sm' style={{ color: "var(--paragraph)" }}>
                  {error
                    ? "Failed to load posts."
                    : "No posts available right now."}
                </p>
              </div>
            )}

          <div className='mt-2 flex justify-end'>
            <Link href='/posts'>
              <Button className='flex-row-reverse' icon={<ArrowRight />}>
                View All Blogs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
