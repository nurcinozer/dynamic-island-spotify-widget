import React from "react";
type PlayingAnimationProps = {
  color?: string;
};

export const PlayingAnimation: React.FC<PlayingAnimationProps> = ({
  color = "#8E8E93",
}) => {
  return (
    <div className="flex justify-between w-22-px h-20-px self-start">
      <div
        className="rounded-lg scale-y-04 h-full w-2-px animate-quiet"
        style={{
          background: color,
        }}
      ></div>
      <div
        className="rounded-lg scale-y-04 h-full w-2-px animate-normal"
        style={{
          background: color,
        }}
      ></div>
      <div
        className="rounded-lg scale-y-04 h-full w-2-px animate-quiet"
        style={{
          background: color,
        }}
      ></div>
      <div
        className="rounded-lg scale-y-04 h-full w-2-px animate-loud"
        style={{
          background: color,
        }}
      ></div>
      <div
        className="rounded-lg scale-y-04 h-full w-2-px animate-quiet"
        style={{
          background: color,
        }}
      ></div>
      <div
        className="rounded-lg scale-y-04 h-full w-2-px animate-normal"
        style={{
          background: color,
        }}
      ></div>
    </div>
  );
};
