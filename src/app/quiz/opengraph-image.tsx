import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TypeScript is weird — Take the Quiz";
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
              "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)",
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
            Quiz
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Can you beat the quiz?
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#94a3b8",
            }}
          >
            20 tricky TypeScript questions — conditional types, infer, satisfies
            & more
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
          tsisweird.com/quiz
        </div>
      </div>
    ),
    { ...size }
  );
}
