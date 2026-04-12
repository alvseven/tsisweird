import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TypeScript Behaviors Reference";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#10132B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#64748b",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
            }}
          >
            Reference
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            TypeScript Behaviors
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#94a3b8",
            }}
          >
            Every quirk explained — code, answers & detailed breakdowns
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#475569",
          }}
        >
          tsisweird.com/learn
        </div>
      </div>
    ),
    { ...size }
  );
}
