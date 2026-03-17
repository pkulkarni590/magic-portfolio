"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function IronmanPage() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      revealRefs.current.push(el);
    }
  };

  return (
    <main
      style={{
        background: "#F5F2ED",
        color: "#1a1a1a",
        minHeight: "100vh",
        width: "100%",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* ── Hero — full viewport ── */}
      <section style={{ position: "relative", width: "100%", height: "100vh" }}>
        <Image
          src="/images/gallery/ironman-1.png"
          alt="Ironman 70.3 Bahrain"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "50% 27%" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            left: "clamp(24px, 6vw, 80px)",
          }}
        >
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              fontWeight: 500,
              margin: "0 0 14px",
            }}
          >
            Bahrain · December 2025
          </p>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.02,
              margin: 0,
              color: "#ffffff",
            }}
          >
            Ironman 70.3
            <br />
            Bahrain
          </h1>
          <p
            style={{
              marginTop: "18px",
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.70)",
              maxWidth: "480px",
            }}
          >
            You do not cross a finish line. You survive it.
          </p>
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section
        ref={addReveal}
        style={{
          padding: "96px clamp(24px, 10vw, 120px)",
          display: "flex",
          justifyContent: "center",
          background: "#F5F2ED",
        }}
      >
        <blockquote
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            lineHeight: 1.45,
            textAlign: "center",
            maxWidth: "640px",
            margin: 0,
            color: "#2c2c2c",
            fontStyle: "italic",
            borderLeft: "none",
            padding: 0,
          }}
        >
          "The water felt like concrete. The bike felt like mercy. The run felt
          like a conversation with every version of myself that ever thought
          about quitting."
        </blockquote>
      </section>

      {/* ── Race stats strip ── */}
      <section
        ref={addReveal}
        style={{
          background: "#EDE9E2",
          padding: "52px 24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            maxWidth: "760px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {[
            { value: "70.3", label: "Total Miles" },
            { value: "1.9km", label: "Swim" },
            { value: "90km", label: "Bike" },
            { value: "21.1km", label: "Run" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontWeight: 700,
                  margin: "0 0 6px",
                  color: "#1a1a1a",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.45)",
                  margin: 0,
                  fontWeight: 600,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Story body ── */}
      <article
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "80px clamp(24px, 6vw, 48px)",
        }}
      >
        {/* Section 1 */}
        <section ref={addReveal}>
          <h2
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.4)",
              fontWeight: 600,
              margin: "0 0 28px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            The Swim
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.12rem)",
              lineHeight: 1.82,
              color: "#2c2c2c",
              margin: "0 0 20px",
            }}
          >
            The Arabian Gulf at dawn is warm and flat and deceptive. You drop in
            with six hundred other people and within thirty seconds you cannot
            see your hand in front of your face. Not because of darkness. Because
            of arms and legs and the white churn of bodies all trying to find
            the same line in the water.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.12rem)",
              lineHeight: 1.82,
              color: "#2c2c2c",
              margin: 0,
            }}
          >
            I had trained for this moment for nine months. I had swum 1.9
            kilometres in a pool more times than I can count. None of it quite
            prepared me for the feeling of open water with no lane lines, no
            walls, no bottom you can touch. Just the horizon and the choice to
            keep moving.
          </p>
        </section>

        {/* Divider */}
        <div
          ref={addReveal}
          style={{
            margin: "60px auto",
            textAlign: "center",
            color: "rgba(26,26,26,0.25)",
            fontSize: "1.1rem",
            letterSpacing: "0.5em",
          }}
        >
          · · ·
        </div>

        {/* Section 2 */}
        <section ref={addReveal}>
          <h2
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.4)",
              fontWeight: 600,
              margin: "0 0 28px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            The Bike
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.12rem)",
              lineHeight: 1.82,
              color: "#2c2c2c",
              margin: "0 0 20px",
            }}
          >
            Ninety kilometres on a flat course sounds like mercy after the swim.
            And for the first thirty, it is. The legs wake up. The lungs find
            rhythm. You pass people and you feel, briefly, like you are good at
            this.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.12rem)",
              lineHeight: 1.82,
              color: "#2c2c2c",
              margin: 0,
            }}
          >
            Then the wind picks up off the Gulf and you understand that flat is
            not the same as easy. I rode through the headwind with my hands on
            the drops and my mind on the run still waiting for me. The trick to
            the bike, I have decided, is to never fully believe it is going
            well.
          </p>
        </section>

        {/* Divider */}
        <div
          ref={addReveal}
          style={{
            margin: "60px auto",
            textAlign: "center",
            color: "rgba(26,26,26,0.25)",
            fontSize: "1.1rem",
            letterSpacing: "0.5em",
          }}
        >
          · · ·
        </div>

        {/* Section 3 */}
        <section ref={addReveal}>
          <h2
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.4)",
              fontWeight: 600,
              margin: "0 0 28px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            The Run
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.12rem)",
              lineHeight: 1.82,
              color: "#2c2c2c",
              margin: "0 0 20px",
            }}
          >
            The run is where you find out who you are. Not your fitness level.
            Not your race strategy. You. At kilometre fifteen, everything that
            was working stops working, and all you have left is the question of
            whether you will keep moving anyway.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.12rem)",
              lineHeight: 1.82,
              color: "#2c2c2c",
              margin: 0,
            }}
          >
            I kept moving. Not gracefully. Not at the pace I had planned. But I
            kept moving, and at kilometre 21 there was a finish line and I
            crossed it and someone put a medal around my neck and I did not feel
            triumphant. I felt quiet. The kind of quiet that only comes after
            you have asked everything of yourself.
          </p>
        </section>
      </article>

      {/* ── Photo essay — full bleed ironman-2 ── */}
      <section
        ref={addReveal}
        style={{ width: "100%", position: "relative", aspectRatio: "16/9" }}
      >
        <Image
          src="/images/gallery/ironman-2.png"
          alt="Ironman 70.3 Bahrain finish"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
      </section>

      {/* ── Photo grid — outdoor race-day shots ── */}
      <section
        ref={addReveal}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "4px",
          width: "100%",
        }}
      >
        {[
          "/images/gallery/outdoor-1.jpg",
          "/images/gallery/outdoor-2.jpg",
          "/images/gallery/outdoor-3.jpg",
          "/images/gallery/outdoor-4.jpg",
        ].map((src, i) => (
          <div
            key={src}
            style={{ position: "relative", aspectRatio: "4/3" }}
          >
            <Image
              src={src}
              alt={`Race day photo ${i + 1}`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="50vw"
            />
          </div>
        ))}
      </section>

      {/* ── Closing line ── */}
      <section
        ref={addReveal}
        style={{
          padding: "80px clamp(24px, 10vw, 120px)",
          display: "flex",
          justifyContent: "center",
          background: "#F5F2ED",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            lineHeight: 1.6,
            textAlign: "center",
            maxWidth: "520px",
            margin: 0,
            color: "rgba(26,26,26,0.65)",
            fontStyle: "italic",
          }}
        >
          Bahrain, December 2025. One race. One finish line. Everything I had.
        </p>
      </section>

      {/* ── Back nav ── */}
      <section style={{ padding: "0 clamp(24px, 6vw, 48px) 72px" }}>
        <a
          href="/gallery"
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.35)",
            textDecoration: "none",
            fontWeight: 600,
            fontFamily: "system-ui, sans-serif",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#1a1a1a";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(26,26,26,0.35)";
          }}
        >
          ← Back to Life
        </a>
      </section>
    </main>
  );
}
