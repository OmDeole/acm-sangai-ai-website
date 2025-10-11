"use client";
import {
  useScroll,
  useTransform,
  motion
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref, data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"]
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-5xl mb-4 font-bold gradient-text text-center !whitespace-pre-line">
          Events
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center">
          Discover our exciting lineup of workshops, hackathons, and tech talks
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {/* Timeline vertical line - now centered on the dots */}
        <div
          className="absolute left-[36px] top-0 w-[2px] h-full bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-0"
          style={{ height: "100%" }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-accent to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {/* Timeline items */}
        <div className="flex flex-col gap-24 relative z-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-start gap-6"
            >
              {/* Dot and title */}
              <div className="relative flex flex-col items-center min-w-[56px]">
                <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center z-10">
                  <div className="h-4 w-4 rounded-full bg-accent border border-accent/50 p-2 glow" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-gray-400 mt-4">
                  {item.title}
                </h3>
              </div>
              {/* Content */}
              <div className="relative pl-2 pr-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-400">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};