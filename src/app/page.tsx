import {
  Heading,
  Text,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
  ToggleButton,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, work, blog, gallery } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

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
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
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
        {/* Portrait + Intro side by side */}
        <Row fillWidth gap="xl" vertical="center" horizontal="center" s={{ direction: "column", horizontal: "center" }}>
          {/* Portrait shifted slightly right */}
          <RevealFx translateY="4">
            <Avatar src={person.avatar} size="xl" style={{ width: "160px", height: "160px", marginLeft: "48px" }} />
          </RevealFx>
          {/* Name + intro */}
          <Column flex={1} gap="m">
            <RevealFx translateY="4">
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
        {/* Nav centered below both portrait and intro */}
        <RevealFx translateY="8" delay={0.3} horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            gap="4"
            textVariant="body-default-s"
            fitWidth
          >
            {routes["/"] && (
              <ToggleButton prefixIcon="home" href="/" selected />
            )}
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
            {routes["/about"] && (
              <ToggleButton prefixIcon="person" href="/about" label={about.label} />
            )}
            {routes["/work"] && (
              <ToggleButton prefixIcon="grid" href="/work" label={work.label} />
            )}
            {routes["/blog"] && (
              <ToggleButton prefixIcon="book" href="/blog" label={blog.label} />
            )}
            {routes["/gallery"] && (
              <ToggleButton prefixIcon="gallery" href="/gallery" label={gallery.label} />
            )}
          </Row>
        </RevealFx>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
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
      <Projects range={[2]} />
      <Mailchimp />
    </Column>
  );
}
