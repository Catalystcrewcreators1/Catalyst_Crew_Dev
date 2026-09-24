import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPostsData } from "@/data/blog";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — Catalyst Crew Dispatches`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-brand-cream pb-20">
      {/* Back to Blog */}
      <div className="border-b border-brand-light bg-brand-white py-3">
        <Container size="narrow">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-brand-neutral hover:text-brand-ink transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Dispatches
          </Link>
        </Container>
      </div>

      {/* Article Header */}
      <header className="bg-brand-ink text-white py-16 sm:py-20 border-b border-brand-soft">
        <Container size="narrow">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-red">
              <span className="uppercase tracking-widest font-semibold">
                {post.category}
              </span>
              <span className="text-brand-light/30">•</span>
              <span className="text-brand-light/70">{post.readTime}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-brand-light/80 leading-relaxed font-sans pt-1">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="pt-6 border-t border-brand-soft/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-full overflow-hidden bg-brand-soft">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-brand-light/60">
                    {post.author.role} • {post.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Image */}
      <Container size="narrow" className="mt-8">
        <div className="relative h-72 sm:h-96 w-full rounded-card overflow-hidden shadow-card border border-brand-light bg-brand-soft">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>

      {/* Article Content */}
      <Container size="narrow" className="mt-10">
        <div className="rounded-card border border-brand-light bg-brand-white p-8 sm:p-12 shadow-subtle">
          <div className="prose prose-neutral max-w-none space-y-5 text-sm sm:text-base leading-relaxed text-brand-ink/90 font-sans">
            {post.content.split("\n\n").map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="font-display text-2xl font-bold text-brand-ink pt-4 border-b border-brand-light/60 pb-2"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("#### ")) {
                return (
                  <h4
                    key={index}
                    className="font-display text-lg font-bold text-brand-ink pt-2 text-brand-red"
                  >
                    {trimmed.replace("#### ", "")}
                  </h4>
                );
              }
              if (trimmed.startsWith("1. ") || trimmed.startsWith("- ")) {
                return (
                  <div key={index} className="rounded-lg bg-brand-cream/40 p-4 border border-brand-light/60 text-sm">
                    {trimmed}
                  </div>
                );
              }
              return (
                <p key={index} className="text-brand-neutral leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-brand-light/60 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-brand-neutral">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-brand-cream border border-brand-light px-2.5 py-1 text-xs font-mono text-brand-neutral"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Next Read Footer */}
        <div className="mt-10 rounded-card bg-brand-ink text-white p-8 text-center space-y-4">
          <h3 className="font-display text-2xl font-bold">
            Write With Catalyst Crew
          </h3>
          <p className="text-xs sm:text-sm text-brand-light/70 max-w-md mx-auto">
            Have you shipped an interesting architectural breakthrough, survived an intense hackathon, or uncovered a systems optimization? We accept guest dispatches.
          </p>
          <div className="pt-2 flex justify-center">
            <Button href="/contact" variant="primary" size="sm">
              PITCH AN ARTICLE
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
