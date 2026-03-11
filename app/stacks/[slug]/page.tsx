import type { Metadata } from "next";
import { stacks, getStack } from "../../../data/stacks";
import { notFound } from "next/navigation";
import StackPageClient from "./StackPageClient";

// ─── Static generation ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return stacks.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stack = getStack(slug);
  if (!stack) return {};
  return {
    title: stack.title,
    description: stack.metaDescription,
    openGraph: {
      title: stack.headline,
      description: stack.metaDescription,
      type: "article",
    },
  };
}

// ─── Page (server) ─────────────────────────────────────────────────────────────
export default async function StackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stack = getStack(slug);
  if (!stack) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: stack.headline,
        description: stack.metaDescription,
        dateModified: stack.lastUpdated,
        author: { "@type": "Organization", name: "FieldSalesStack.com" },
        publisher: {
          "@type": "Organization",
          name: "FieldSalesStack.com",
          url: "https://www.fieldsalesstack.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.fieldsalesstack.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: stack.title,
            item: `https://www.fieldsalesstack.com/stacks/${stack.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: stack.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StackPageClient stack={stack} />
    </>
  );
}
