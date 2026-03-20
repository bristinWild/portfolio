"use client";
import { useState } from "react";
import { data } from "@/lib/data";

export default function ProfileImage() {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (index + 1 < data.ipfsFallbacks.length) {
      setIndex(index + 1);
    } else {
      setFailed(true);
    }
  };

  if (failed) return null;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--bg-alt)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.ipfsFallbacks[index]}
        alt={data.name}
        onError={handleError}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
    </div>
  );
}
