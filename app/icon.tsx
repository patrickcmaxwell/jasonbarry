import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fafaf5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 38,
          letterSpacing: "-0.04em",
          border: "3px solid #fafaf5",
          borderRadius: 6,
        }}
      >
        JB
      </div>
    ),
    { ...size }
  );
}
