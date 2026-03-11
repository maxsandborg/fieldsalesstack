import type { Metadata } from "next";
import Link from "next/link";
import { stacks } from "../data/stacks";

export const metadata: Metadata = {
  title: "Curated Tech Stacks for Field Sales Teams",
  description:
    "Find the best software combination for your field sales team. Curated tech stacks by industry and team size — with real pricing, honest reviews, and total cost per rep.",
};

export default function HomePage() {
  const industryStacks = stacks.filter((s) => s.category === "industry");
  const teamSizeStacks = stacks.filter((s) => s.category === "team-size");

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 60%, #0f2340 100%)",
          padding: "72px 20px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(29,108,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(29,108,232,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(29,108,232,0.15)",
              border: "1px solid rgba(29,108,232,0.3)",
              borderRadius: 20,
              padding: "5px 14px",
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: 11, color: "#60a5fa", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Updated March 2026
            </span>
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.1,
              margin: "0 0 20px",
              letterSpacing: "-1px",
            }}
          >
            Stop Guessing Which Tools Your
            <br />
            <span style={{ color: "#3b82f6" }}>Field Sales Team Actually Needs</span>
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.6,
              margin: "0 0 36px",
              maxWidth: 580,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Curated tech stacks for every field sales vertical. Find the right combination of tools for your industry and team size — with real pricing and no BS.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#industry-stacks"
              style={{
                background: "#1d6ce8",
                color: "#fff",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                padding: "13px 28px",
                borderRadius: 10,
                display: "inline-block",
              }}
            >
              Browse by Industry →
            </a>
            <a
              href="#team-size-stacks"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#e2e8f0",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                padding: "13px 28px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.12)",
                display: "inline-block",
              }}
            >
              Browse by Team Size
            </a>
          </div>

          {/* Trust signals */}
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 32,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "11", label: "Stack Guides" },
              { num: "40+", label: "Tools Covered" },
              { num: "100%", label: "Independent Research" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontSize: 22, fontWeight: 800 }}>{stat.num}</div>
                <div style={{ color: "#64748b", fontSize: 12, marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works strip */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "24px 20px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            textAlign: "center",
          }}
        >
          {[
            { icon: "🎯", title: "Pick Your Industry", desc: "8 verticals covered — roofing, solar, HVAC, and more" },
            { icon: "📊", title: "See the Full Stack", desc: "Each guide breaks down the exact tools, costs, and why they work together" },
            { icon: "🔗", title: "Compare Individual Tools", desc: "Dive deeper into any tool on FieldSalesTools.com" },
          ].map((step) => (
            <div key={step.title}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{step.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1f36", marginBottom: 4 }}>{step.title}</div>
              <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Stacks */}
      <section id="industry-stacks" style={{ padding: "64px 20px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div
              style={{
                display: "inline-block",
                background: "#eff6ff",
                color: "#1d6ce8",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 20,
                marginBottom: 12,
              }}
            >
              By Industry
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 800,
                color: "#0f2340",
                margin: "0 0 8px",
                letterSpacing: "-0.5px",
              }}
            >
              Industry-Specific Stacks
            </h2>
            <p style={{ color: "#64748b", fontSize: 15, margin: 0, maxWidth: 540 }}>
              Every vertical has unique requirements. We build stacks around how each industry actually sells.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {industryStacks.map((stack) => (
              <StackCard key={stack.slug} stack={stack} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Size Stacks */}
      <section id="team-size-stacks" style={{ background: "#f8fafc", padding: "64px 20px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div
              style={{
                display: "inline-block",
                background: "#f0fdf4",
                color: "#059669",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 20,
                marginBottom: 12,
              }}
            >
              By Team Size
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 800,
                color: "#0f2340",
                margin: "0 0 8px",
                letterSpacing: "-0.5px",
              }}
            >
              Stacks by Team Size
            </h2>
            <p style={{ color: "#64748b", fontSize: 15, margin: 0, maxWidth: 540 }}>
              What works for a solo rep is very different from what a 50-person team needs. Find the right complexity for where you are now.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {teamSizeStacks.map((stack) => (
              <StackCard key={stack.slug} stack={stack} variant="team" />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "#0f2340",
          padding: "64px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>🔍</div>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 800,
              margin: "0 0 12px",
              letterSpacing: "-0.3px",
            }}
          >
            Need to Compare Individual Tools?
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.6, margin: "0 0 28px" }}>
            FieldSalesTools.com lets you compare specific tools side-by-side across pricing, features, and reviews — before you commit to a stack.
          </p>
          <a
            href="https://www.fieldsalestools.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#1d6ce8",
              color: "#fff",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
              padding: "13px 28px",
              borderRadius: 10,
              display: "inline-block",
            }}
          >
            Visit FieldSalesTools.com →
          </a>
        </div>
      </section>
    </>
  );
}

function StackCard({
  stack,
  variant = "industry",
}: {
  stack: (typeof stacks)[0];
  variant?: "industry" | "team";
}) {
  const toolCount = stack.tools.length;

  return (
    <Link
      href={`/stacks/${stack.slug}`}
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 14,
          overflow: "hidden",
          transition: "all 0.2s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        className="stack-card"
      >
        {/* Card header with gradient */}
        <div
          style={{
            background: stack.heroGradient,
            padding: "24px 20px",
            position: "relative",
            minHeight: 100,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "rgba(255,255,255,0.15)",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {stack.icon}
          </div>
          {/* Cost badge */}
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              padding: "3px 10px",
            }}
          >
            <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>
              {stack.totalCostLow}–{stack.totalCostHigh}
            </span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, marginLeft: 3 }}>/rep</span>
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              color: "#0f2340",
              fontSize: 16,
              fontWeight: 800,
              margin: "0 0 8px",
              lineHeight: 1.3,
              letterSpacing: "-0.2px",
            }}
          >
            {stack.title}
          </h3>
          <p
            style={{
              color: "#64748b",
              fontSize: 13,
              lineHeight: 1.5,
              margin: "0 0 16px",
              flex: 1,
            }}
          >
            {stack.whoIsItFor.length > 100
              ? stack.whoIsItFor.slice(0, 97) + "…"
              : stack.whoIsItFor}
          </p>

          {/* Tools preview */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {stack.tools.slice(0, 3).map((tool) => (
              <span
                key={tool.slug}
                style={{
                  background: "#f1f5f9",
                  color: "#475569",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: 6,
                }}
              >
                {tool.name}
              </span>
            ))}
            {toolCount > 3 && (
              <span
                style={{
                  background: "#eff6ff",
                  color: "#1d6ce8",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: 6,
                }}
              >
                +{toolCount - 3} more
              </span>
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #f1f5f9",
              paddingTop: 14,
            }}
          >
            <span style={{ fontSize: 12, color: "#94a3b8" }}>
              {toolCount} tools · {stack.lastUpdated}
            </span>
            <span
              style={{
                color: "#1d6ce8",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              View stack →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
