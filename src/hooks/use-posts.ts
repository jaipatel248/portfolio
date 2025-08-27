"use client";

import type { PostItem } from "@/components/sections/blog/PostCard";
import { getImageUrl, getPlainExcerpt } from "@/components/sections/blog/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type UsePostsOptions = {
  feedUrl?: string; // RSS feed url (will be wrapped by rss2json proxy)
  minLoadingTimeMs?: number; // minimum skeleton time
  limit?: number; // optional slice
};

/**
 * Client-side hook to fetch and normalize blog posts from an RSS feed
 * using the rss2json proxy (avoids CORS when fetching in the browser).
 */
export function usePosts(options: UsePostsOptions = {}) {
  const {
    feedUrl = "https://medium.com/feed/@jaipatel248",
    minLoadingTimeMs = 1500,
    limit,
  } = options;

  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const fetchPosts = useCallback(async () => {
    // Abort any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const start = Date.now();
    setLoading(true);
    setError(null);

    try {
      const cacheBuster = new Date().getDate().toString();      
      const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        feedUrl,
      )}?q=${cacheBuster}`;

      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
      const data = await res.json();
      const items = Array.isArray(data?.items) ? data.items : [];

      const normalized: PostItem[] = items.map((it: any) => ({
        id: String(it.guid || it.id || it.link || Math.random()),
        title: String(it.title || "Untitled"),
        link: String(it.link || "#"),
        pubDate: it.pubDate,
        author: it.author,
        categories: it.categories,
        thumbnail: getImageUrl(it),
        description: it.description,
        excerpt: getPlainExcerpt(it.description),
      }));
      setPosts(normalized);
    } catch (e: any) {
      if (e?.name === "AbortError") return; // ignore aborted fetches
      console.error(e);
      setError(e?.message || "Unknown error");
    } finally {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minLoadingTimeMs - elapsed);
      const t = setTimeout(() => setLoading(false), remaining);
      return () => clearTimeout(t);
    }
  }, [feedUrl, minLoadingTimeMs]);

  useEffect(() => {
    fetchPosts();
    return () => {
      abortRef.current?.abort();
    };
  }, [fetchPosts]);

  const sliced = useMemo(() => (limit ? posts.slice(0, limit) : posts), [posts, limit]);

  return {
    posts: sliced,
    loading,
    error,
    reload: fetchPosts,
  } as const;
}

export default usePosts;
