"use client";

import { Skeleton } from "@/components/ui/skeleton";
import usePosts from "@/hooks/use-posts";
import { motion } from "framer-motion";
import { FileWarning, RepeatIcon } from "lucide-react";
import { useState } from "react";
import ReusableCard from "../../layout/ReusableCard";
import { Button } from "../../ui/button";
import { Card, CardContent, CardFooter } from "../../ui/card";
import { RandomizedTextEffect } from "../../ui/text-randomized";

export default function PostsPreview() {
  const direction = "en";

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  const [flag, setflag] = useState(false);
  const { posts, loading, error } = usePosts({});

  const reload = () => {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      dir={direction}
      className="posts  flex min-h-[100vh] w-full flex-col gap-5 max-md:pb-0 max-md:pt-[0px]"
    >
      <div className="flex relative w-full min-h-[50vh] flex-col items-center justify-center gap-8 ">
        {loading
          ? Array(3)
              .fill(null)
              .map((_, index) => (
                <motion.div
                  key={index}
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[var(--card-background)] border-[var(--card-border-color)] border rounded-[10px] p-6 space-y-4">
                    {/* Cover image skeleton */}
                    <Skeleton className="w-full h-48 rounded-[8px]" />

                    {/* Title skeleton */}
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>

                    {/* Description skeleton */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>

                    {/* Tags skeleton */}
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                      <Skeleton className="h-6 w-14 rounded-full" />
                    </div>

                    {/* Links skeleton */}
                    <div className="flex gap-4 pt-2">
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </div>
                </motion.div>
              ))
          : // Show posts once data is fetched
            posts.map((post) => (
              <ReusableCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.excerpt}
                skills={Array.isArray(post.categories) ? post.categories : []}
                websiteLink={post.link}
                githubLink={post.link}
                date={post.pubDate}
                linkStyle={styles.linkStyle}
                className="pb-4 pt-2"
                dir={direction}
                coverImg={post.thumbnail} // Passing image URL as 'img' prop
              />
            ))}

        {flag && (
          <Card className="flex   h-max absolute inset-0 m-auto text-[var(--paragraph)] w-full  rounded-[10px] p-3 justify-center items-center flex-col gap-3">
            <CardContent>
              <div className="error flex items-center justify-center gap-1">
                <FileWarning />
                <RandomizedTextEffect
                  className=" text-[var(--paragraph)]"
                  text={"Faield to get posts"}
                />
              </div>
            </CardContent>

            <CardFooter>
              <Button className="gap-0" onClick={reload} icon={<RepeatIcon />}>
                Try again
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </motion.div>
  );
}
