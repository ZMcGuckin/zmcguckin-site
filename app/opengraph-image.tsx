import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zach McGuckin – Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#030712",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#10b981",
            marginBottom: 16,
            fontFamily: "monospace",
          }}
        >
          zmcguckin.com
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f9fafb",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Zach McGuckin
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#9ca3af",
            lineHeight: 1.3,
          }}
        >
          Senior Software Engineer at Spotify
        </div>
      </div>
    ),
    { ...size }
  );
}
