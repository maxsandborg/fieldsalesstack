import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tools } from "@/data/tools";

export const metadata = {
  title: "Field Sales Tools — 20+ Reviewed & Compared (2026) | FieldSalesTools.com",
  description:
    "Independent reviews of every major field sales, D2D, and canvassing software tool. Compare pricing, features, and see which tools fit your team.",
};

const CATEGORIES = [
  "All",
  "D2D & Canvassing",
  "CRM & Pipeline",
  "Route Optimization",
  "Team Management",
  "Analytics",
];

export default function ToolsPage() {
  const featured = tools.filter((t) => t.featured).sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
  const rest = tools.filter((t) => !t.featured).sort((a, b) => b.rating - a.rating);
  const allTools = [...featured, ...rest];

  return (
    <>
      <Header />
      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ background: "#0f2340", padding: "60px 20px 48px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 8 }}>
              <Link href="/" style={{ color: "#64748b", textDecoration: "none", fontSize: 13 }}>
                FieldSalesTools.com
              </Link>
              <span style={{ color: "#334155", margin: "0 8px" }}>/</span>
              <span style={{ color: "#94a3b8", fontSize: 13 }}>Tools</span>
            </div>
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.15,
                margin: "0 0 16px",
                letterSpacing: "-0.5px",
              }}
            >
              Field Sales Software Directory
            </h1>
            <p style={{ color: "#94a3b8", fontSize: 17, maxWidth: 600, margin: 0, lineHeight: 1.6 }}>
              {tools.length} tools reviewed. Unbiased editorial ratings. Find the right software for your
              D2D, canvassing, or field sales team.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
          {/* Stats bar */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginBottom: 40,
              padding: "20px 24px",
              background: "#fff",
              borderRadius: 12,
              border: "1px solid #e2e8f0",
            }}
          >
            {[
              { value: `${tools.length}+`, label: "Tools Reviewed" },
              { value: "100%", label: "Independent Editorial" },
              { value: "2026", label: "Data Updated" },
              { value: "Free", label: "No Signup Required" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#0f2340" }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tools grid */}
          <div style={{ display: "grid", gap: 16 }}>
            {allTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: tool.featured ? "2px solid #1d6ce8" : "1px solid #e2e8f0",
                    borderRadius: 12,
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    transition: "box-shadow 0.15s",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  className="tool-card-hover"
                >
                  {tool.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 16,
                        background: "#1d6ce8",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: 20,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {tool.badgeText ?? "Featured"}
                    </div>
                  )}

                  {/* Logo */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: "#f1f5f9",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    {tool.logo}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <span style={{ color: "#0f2340", fontWeight: 700, fontSize: 16 }}>{tool.name}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ color: "#f59e0b", fontSize: 14 }}>★</span>
                        <span style={{ color: "#334155", fontSize: 13, fontWeight: 600 }}>{tool.rating}</span>
                        <span style={{ color: "#94a3b8", fontSize: 12 }}>({tool.reviewCount})</span>
                      </div>
                    </div>
                    <p style={{ color: "#475569", fontSize: 13, margin: "0 0 8px", lineHeight: 1.5 }}>
                      {tool.tagline}
                    </p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {tool.categories.slice(0, 3).map((cat) => (
                        <span
                          key={cat}
                          style={{
                            background: "#f1f5f9",
                            color: "#475569",
                            fontSize: 11,
                            padding: "3px 8px",
                            borderRadius: 20,
                            fontWeight: 500,
                          }}
                        >
                          {cat}
                        </span>
                      ))}
                      <span
                        style={{
                          background: "#f0f9ff",
                          color: "#0369a1",
                          fontSize: 11,
                          padding: "3px 8px",
                          borderRadius: 20,
                          fontWeight: 500,
                        }}
                      >
                        From {tool.pricingFrom}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{ color: "#94a3b8", fontSize: 18, flexShrink: 0 }}>→</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            style={{
              marginTop: 48,
              padding: "32px",
              background: "#0f2340",
              borderRadius: 16,
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>
              Not sure which tools to combine?
            </h2>
            <p style={{ color: "#94a3b8", margin: "0 0 20px" }}>
              See our curated tech stack guides for every industry and team size.
            </p>
            <Link
              href="/"
              style={{
                background: "#1d6ce8",
                color: "#fff",
                textDecoration: "none",
                padding: "10px 24px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Browse Stack Guides →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
