"use client";
import React from "react";
import dynamic from "next/dynamic";
import AnimatedNumber from "react-animated-numbers";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const ArchievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "5",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] hidden border rounded-md py-8 px-16  flex-row items-center justify-center">
        {ArchievementsList.map((archievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {archievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(archievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {archievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{archievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AchievementsSection;
