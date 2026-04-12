import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TypeScript is weird — Quiz & Reference";
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
              "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
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
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            TypeScript is weird
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              letterSpacing: "0.01em",
            }}
          >
            20 questions on the quirks of the type system
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 18,
            color: "#475569",
          }}
        >
          tsisweird.com
        </div>
      </div>
    ),
    { ...size }
  );
}
