import { ImageResponse } from "next/og";

export const alt = "Jason Barry Golf · College Recruiting Advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fafaf5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Big JB watermark */}
        <div
          style={{
            position: "absolute",
            right: -40,
            bottom: -120,
            fontSize: 720,
            fontWeight: 900,
            letterSpacing: "-0.06em",
            color: "rgba(250,250,245,0.06)",
            lineHeight: 1,
            display: "flex",
          }}
        >
          JB
        </div>

        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              border: "3px solid #fafaf5",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 900,
              letterSpacing: "-0.04em",
            }}
          >
            JB
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}>Jason Barry</div>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.18em", color: "rgba(250,250,245,0.5)", textTransform: "uppercase", marginTop: 4 }}>Golf · Recruiting · Instruction</div>
          </div>
        </div>

        {/* Center headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "0.18em", color: "#d33421", textTransform: "uppercase", marginBottom: 24 }}>
            Honest recruiting strategy
          </div>
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 0.92,
              textTransform: "uppercase",
            }}
          >
            Former college coach.
          </div>
        </div>

        {/* Bottom: credentials strip */}
        <div style={{ display: "flex", gap: 48, fontSize: 18, fontWeight: 600, letterSpacing: "0.04em", color: "rgba(250,250,245,0.7)" }}>
          <div>11 YEARS COLLEGE COACHING</div>
          <div style={{ color: "rgba(250,250,245,0.25)" }}>·</div>
          <div>5× GOLF DIGEST BEST YOUNG TEACHER</div>
          <div style={{ color: "rgba(250,250,245,0.25)" }}>·</div>
          <div>SPRINGDALE GC</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
