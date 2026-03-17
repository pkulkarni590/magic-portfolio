import { Flex, Meta, Schema } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Flex maxWidth="l" direction="column" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Ironman feature link */}
      <a
        href="/gallery/ironman"
        style={{
          display: "block",
          position: "relative",
          width: "100%",
          aspectRatio: "21/9",
          overflow: "hidden",
          borderRadius: "12px",
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        <img
          src="/images/gallery/ironman-1.png"
          alt="Ironman 70.3 Bahrain"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 27%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
          }}
        />
        <div style={{ position: "absolute", bottom: "28px", left: "32px", color: "#ffffff" }}>
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "6px",
              opacity: 0.75,
              fontWeight: 500,
              margin: "0 0 6px",
            }}
          >
            Feature Story
          </p>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              margin: "0 0 8px",
              lineHeight: 1.1,
            }}
          >
            Ironman 70.3 Bahrain
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "0.82rem",
              opacity: 0.7,
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
            }}
          >
            You do not cross a finish line. You survive it.
          </p>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.9)",
              fontWeight: 600,
            }}
          >
            Read the full story →
          </p>
        </div>
      </a>

      <GalleryView />
    </Flex>
  );
}
