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
  timeframe?: string;
}

const projects: Project[] = [
  {
    title: "LLM-Powered Code Review Assistant",
    description:
      "Built an LLM and machine learning powered code review tool in Python and Go that analyzes pull requests, flags violations, and suggests algorithmic improvements, deployed on GCP with a scalable microservices architecture. Applied data structures and algorithms to optimize AST parsing, reducing code analysis time by 60%, while handling 500+ concurrent review requests.",
    tags: ["Python", "Go", "LLMs", "Machine Learning", "GCP"],
    timeframe: "Dec 2025 – Mar 2026",
  },
  {
    title: "Scalable Distributed File Sync Engine",
    description:
      "Designed a distributed file synchronization system in Python and C++ using consistent hashing and priority queues to handle concurrent writes across 10+ nodes with zero data loss. Built a scalable AWS architecture using S3 and SQS with chunked parallel uploads, reducing sync latency by 40% and improving throughput by 3x under peak traffic.",
    tags: ["Python", "C++", "AWS", "System Design"],
    timeframe: "Aug 2025 – Dec 2025",
  },
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px",
                  border: "1px solid var(--neutral-alpha-weak)",
                  borderRadius: "12px",
                  background: "var(--background-surface)",
                  gap: "12px",
                }}
              >
                {project.timeframe && (
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {project.timeframe}
                  </Text>
                )}
                <Heading as="h3" variant="heading-strong-m">
                  {project.title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ flex: 1 }}>
                  {project.description}
                </Text>
                <Row wrap gap="8">
                  {project.tags.map((tag, i) => (
                    <Tag key={i} size="l">
                      {tag}
                    </Tag>
                  ))}
                </Row>
              </div>
            ))}
          </div>
        )}
      </div>
    </Column>
  );
}
