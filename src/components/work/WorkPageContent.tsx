"use client";

import { useState } from "react";
import { Column, Row, Heading, Text, Tag } from "@once-ui-system/core";
import { about } from "@/resources";
import React from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Trax Project",
    description:
      "Placeholder — add your Trax project description here.",
    tags: ["Product Management", "AI"],
  },
  {
    title: "Johns Hopkins Hospital Project",
    description:
      "Placeholder — add your Johns Hopkins Hospital project description here.",
    tags: ["Healthcare", "Data"],
  },
  // Add more projects here
];

export function WorkPageContent() {
  const [active, setActive] = useState<"experience" | "projects">("experience");

  return (
    <Column fillWidth gap="xl">
      {/* Toggle */}
      <Row
        fitWidth
        background="page"
        border="neutral-alpha-weak"
        radius="m-4"
        shadow="l"
        padding="4"
        gap="4"
        style={{ alignSelf: "center" }}
      >
        <button
          onClick={() => setActive("experience")}
          style={{
            padding: "8px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: active === "experience" ? 600 : 400,
            fontSize: "14px",
            background:
              active === "experience"
                ? "#1a1a1a"
                : "transparent",
            color:
              active === "experience"
                ? "#ffffff"
                : "var(--neutral-on-background-weak)",
            transition: "all 0.2s ease",
          }}
        >
          Work Experience
        </button>
        <button
          onClick={() => setActive("projects")}
          style={{
            padding: "8px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: active === "projects" ? 600 : 400,
            fontSize: "14px",
            background:
              active === "projects"
                ? "#1a1a1a"
                : "transparent",
            color:
              active === "projects"
                ? "#ffffff"
                : "var(--neutral-on-background-weak)",
            transition: "all 0.2s ease",
          }}
        >
          Projects
        </button>
      </Row>

      {/* Content */}
      <div
        style={{
          opacity: 1,
          transition: "opacity 0.2s ease",
        }}
      >
        {active === "experience" && about.work.display && (
          <Column fillWidth gap="l">
            {about.work.experiences.map((experience, index) => (
              <Column
                key={`${experience.company}-${experience.role}-${index}`}
                fillWidth
                padding="l"
                border="neutral-alpha-weak"
                radius="m"
                background="surface"
              >
                <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                  <Text variant="heading-strong-l">{experience.company}</Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {experience.timeframe}
                  </Text>
                </Row>
                <Text
                  variant="body-default-s"
                  onBackground="brand-weak"
                  marginBottom="m"
                >
                  {experience.role}
                </Text>
                <Column as="ul" gap="16">
                  {experience.achievements.map(
                    (achievement: React.ReactNode, i: number) => (
                      <Text
                        as="li"
                        variant="body-default-m"
                        key={`${experience.company}-${i}`}
                      >
                        {achievement}
                      </Text>
                    ),
                  )}
                </Column>
              </Column>
            ))}
          </Column>
        )}

        {active === "projects" && (
          <Column fillWidth gap="l">
            {projects.map((project, index) => (
              <Column
                key={index}
                fillWidth
                padding="l"
                border="neutral-alpha-weak"
                radius="m"
                background="surface"
                gap="m"
              >
                <Heading as="h3" variant="heading-strong-l">
                  {project.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {project.description}
                </Text>
                <Row wrap gap="8">
                  {project.tags.map((tag, i) => (
                    <Tag key={i} size="l">
                      {tag}
                    </Tag>
                  ))}
                </Row>
              </Column>
            ))}
          </Column>
        )}
      </div>
    </Column>
  );
}
