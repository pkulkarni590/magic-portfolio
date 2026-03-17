import {
  Heading,
  Text,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, work, blog, gallery } from "@/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { ChatTriggerBtn } from "@/components/ChatTriggerBtn";
function NavBtn({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="hero-nav-btn"
      style={{ textDecoration: "none" }}
    >
      {label}
    </a>
  );
}

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center" style={{ paddingTop: "91px" }}>
      <style>{`
        .hero-nav-btn {
          display: inline-block;
          padding: 11px 24px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
          color: var(--neutral-on-background-strong);
          font-size: 15.4px;
          font-weight: 500;
          white-space: nowrap;
          transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
        }
        .hero-nav-btn:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        }
      `}</style>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="l" paddingY="32">
        {/* Photo + intro side by side */}
        <Row gap="xl" vertical="center" horizontal="center" s={{ direction: "column", horizontal: "center" }} style={{ maxWidth: "720px", width: "100%" }}>
          <RevealFx translateY="4">
            <img
              src={person.avatar}
              alt={person.name}
              style={{
                width: "339px",
                height: "auto",
                flexShrink: 0,
                borderRadius: "0px",
                objectFit: "cover",
              }}
            />
          </RevealFx>

          <Column gap="m" style={{ flex: 1 }}>
            <RevealFx translateY="4" delay={0.1}>
              <Heading wrap="balance" variant="display-strong-l">
                {person.name}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2}>
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                {home.subline}
              </Text>
            </RevealFx>
          </Column>
        </Row>

        {/* Nav buttons — centered below both photo and intro */}
        <RevealFx translateY="8" delay={0.35}>
          <Row gap="12" horizontal="center" wrap style={{ maxWidth: "720px", width: "100%", margin: "11px auto 0" }}>
            {routes["/"] && <NavBtn href="/" label="Home" />}
            {routes["/about"] && <NavBtn href="/about" label={about.label} />}
            {routes["/work"] && <NavBtn href="/work" label={work.label} />}
            {routes["/blog"] && <NavBtn href="/blog" label="Blog" />}
            {routes["/gallery"] && <NavBtn href="/gallery" label={gallery.label} />}
<ChatTriggerBtn />
          </Row>
        </RevealFx>
      </Column>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Mailchimp />
    </Column>
  );
}
