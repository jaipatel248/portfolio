"use client";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useAnimation } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Logo() {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  async function handleHoverStart() {
    setHovered(true);
    await controls.start({
      strokeDashoffset: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }

  function handleHoverEnd() {
    setHovered(false);
    controls.set({ strokeDashoffset: 0 }); // keep stroke visible after hover ends
  }
  const theme = useTheme();

  return (
    <div
      className='relative cursor-pointer h-7 w-7'
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <Avatar>
        <AvatarImage
          src={"/logos/chromedino.gif"}
          alt={"name"}
          style={{
            filter:
              theme.resolvedTheme === "dark"
                ? "invert(1) brightness(2)"
                : "none",
          }}
        />
      </Avatar>
    </div>
  );
}
