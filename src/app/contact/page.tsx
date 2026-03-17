"use client";

import { useState } from "react";
import { Column, Row, Heading, Text, Icon } from "@once-ui-system/core";

const socials = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/prathmesh-kulkarni-00531116b",
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/prathmesh_k__",
    color: "#E1306C",
  },
  {
    name: "GitHub",
    icon: "github",
    href: "https://github.com/pkulkarni590",
    color: "var(--neutral-on-background-strong)",
  },
  {
    name: "Email",
    icon: "email",
    href: "mailto:pkulkarni590@gmail.com",
    color: "var(--neutral-on-background-strong)",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Column maxWidth="s" gap="xl" paddingY="40" horizontal="center" style={{ width: "100%" }}>
      <Column gap="s" horizontal="center">
        <Heading variant="display-strong-l" align="center">
          Get in Touch
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          I&apos;d love to hear from you. Reach out via social or send a message below.
        </Text>
      </Column>

      {/* Social links */}
      <Row gap="12" horizontal="center" wrap>
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              color: "var(--neutral-on-background-strong)",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            <Icon name={s.icon as any} size="s" />
            {s.name}
          </a>
        ))}
      </Row>

      {/* Divider */}
      <Row fillWidth horizontal="center" style={{ opacity: 0.2 }}>
        <div style={{ height: "1px", background: "var(--neutral-on-background-strong)", width: "100%" }} />
      </Row>

      {/* Contact form */}
      <Column
        as="form"
        gap="l"
        fillWidth
        padding="xl"
        border="neutral-alpha-weak"
        radius="m"
        background="surface"
        // @ts-ignore
        onSubmit={handleSubmit}
      >
        <Heading as="h2" variant="heading-strong-l">
          Send a Message
        </Heading>

        <Column gap="8">
          <Text variant="label-default-s" onBackground="neutral-weak">
            Name
          </Text>
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--neutral-on-background-strong)",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </Column>

        <Column gap="8">
          <Text variant="label-default-s" onBackground="neutral-weak">
            Email
          </Text>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--neutral-on-background-strong)",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </Column>

        <Column gap="8">
          <Text variant="label-default-s" onBackground="neutral-weak">
            Message
          </Text>
          <textarea
            required
            rows={5}
            placeholder="What would you like to discuss?"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--neutral-on-background-strong)",
              fontSize: "14px",
              outline: "none",
              resize: "vertical",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </Column>

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            padding: "12px 28px",
            borderRadius: "9999px",
            border: "none",
            background: "var(--neutral-on-background-strong)",
            color: "var(--background-page)",
            fontSize: "14px",
            fontWeight: 600,
            cursor: status === "sending" ? "not-allowed" : "pointer",
            alignSelf: "flex-start",
            opacity: status === "sending" ? 0.7 : 1,
            transition: "opacity 0.15s ease",
          }}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "sent" && (
          <Text variant="body-default-s" style={{ color: "#4ade80" }}>
            Message sent! I&apos;ll get back to you soon.
          </Text>
        )}
        {status === "error" && (
          <Text variant="body-default-s" style={{ color: "#f87171" }}>
            Something went wrong. Please try emailing me directly at pkulkarni590@gmail.com
          </Text>
        )}
      </Column>
    </Column>
  );
}
