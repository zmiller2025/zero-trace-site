import React from "react";

export function Card({ className = "", ...props }) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return <div className={className} {...props} />;
}
