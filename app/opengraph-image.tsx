import { ImageResponse } from "next/og";

export const alt = "RankLift SEO: SEO services that turn search into revenue";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 36, opacity: 0.85 }}>RankLift SEO</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 20, lineHeight: 1.1 }}>
          SEO services that turn search into revenue
        </div>
      </div>
    ),
    size,
  );
}
