import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, blog, person } from "@/resources";
import { getPosts } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

const categoryColors: Record<string, { text: string; bg: string }> = {
  "AI Ethics":   { text: "#a78bfa", bg: "rgba(139,92,246,0.12)" },
  "Alignment":   { text: "#67e8f9", bg: "rgba(6,182,212,0.12)" },
  "Governance":  { text: "#86efac", bg: "rgba(34,197,94,0.12)" },
  "Risk":        { text: "#fca5a5", bg: "rgba(239,68,68,0.12)" },
  "Philosophy":  { text: "#fcd34d", bg: "rgba(245,158,11,0.12)" },
  "Strategy":    { text: "#f9a8d4", bg: "rgba(236,72,153,0.12)" },
  "AI":          { text: "#a78bfa", bg: "rgba(139,92,246,0.12)" },
};

const slugToCategory: Record<string, string> = {
  "the-libertarian-utopia":  "AI Ethics",
  "the-benevolent-dictator": "Governance",
  "the-egalitarian-utopia":  "AI Ethics",
  "the-gatekeeper":          "Alignment",
  "the-protector-god":       "Governance",
  "the-enslaved-god":        "Alignment",
  "the-conqueror":           "Risk",
  "the-descendant":          "Philosophy",
  "the-zookeeper":           "Risk",
  "the-1984":                "Governance",
  "the-revert":              "Strategy",
  "the-last-chapter":        "Philosophy",
};

export default function Blog() {
  const allPosts = getPosts(["src", "app", "blog", "posts"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginBottom: "8px",
            letterSpacing: "-0.02em",
          }}
        >
          Writing
        </h1>
        <p
          style={{
            fontSize: "1rem",
            opacity: 0.5,
            marginBottom: "48px",
          }}
        >
          Thinking out loud on AI, governance, and what comes next.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="blog-grid"
        >
          {allPosts.map((post) => {
            const cat = slugToCategory[post.slug] ?? post.metadata.tag ?? "AI";
            const color = categoryColors[cat] ?? categoryColors["AI"];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article
                  className="blog-card"
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.03)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "16/10",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {post.metadata.image ? (
                      <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        fill
                        style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                        className="blog-card-img"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.05)" }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                    {/* Badge + date */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: color.text,
                          background: color.bg,
                          padding: "3px 10px",
                          borderRadius: "999px",
                        }}
                      >
                        {cat}
                      </span>
                      <span style={{ fontSize: "0.72rem", opacity: 0.35 }}>
                        {formatDate(post.metadata.publishedAt, false)}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        lineHeight: 1.4,
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {post.metadata.title}
                    </h2>

                    {/* Summary */}
                    <p
                      style={{
                        fontSize: "0.82rem",
                        lineHeight: 1.65,
                        opacity: 0.5,
                        margin: 0,
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.metadata.summary}
                    </p>

                    {/* Read link */}
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: color.text,
                        letterSpacing: "0.05em",
                        marginTop: "4px",
                      }}
                    >
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
        .blog-card:hover .blog-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
