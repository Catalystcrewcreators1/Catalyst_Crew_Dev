import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPostsData } from "@/data/blog";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Compass, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Editorial — Developer Stories & Architecture",
  description:
    "Engineering deep-dives, hackathon survival stories, system architecture teardowns, and cultural manifestos from the Catalyst Crew community.",
};

export default function BlogPage() {
  const featuredPost = blogPostsData[0];
  const regularPosts = blogPostsData.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 border-b border-brand-soft">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                EDITORIAL & STORIES
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              CATALYST DISPATCHES
            </h1>
            <p className="mt-3 text-base text-brand-light/80 leading-relaxed">
              Unfiltered technical essays, engineering culture, hackathon winning blueprints, and lessons learned shipping code in the real world.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Article Spotlight */}
      {featuredPost && (
        <section className="py-12 bg-brand-cream border-b border-brand-light/80">
          <Container>
            <div className="rounded-card border border-brand-light bg-brand-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-card hover:border-brand-ink/40 transition-colors">
              <div className="relative h-64 lg:h-auto lg:col-span-6 bg-brand-soft">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="red" size="sm">
                      FEATURED ESSAY
                    </Badge>
                    <span className="text-xs font-mono text-brand-neutral">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-ink hover:text-brand-red transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-brand-neutral leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-light/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 rounded-full overflow-hidden bg-brand-soft">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-display text-xs font-bold text-brand-ink">
                        {featuredPost.author.name}
                      </div>
                      <div className="text-[10px] font-mono text-brand-neutral">
                        {featuredPost.date}
                      </div>
                    </div>
                  </div>

                  <Button
                    href={`/blog/${featuredPost.slug}`}
                    variant="dark"
                    size="sm"
                    className="gap-1.5"
                  >
                    <span>Read Essay</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Other Posts */}
      <section className="py-12 bg-brand-cream flex-1">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <div
                key={post.slug}
                className="rounded-card border border-brand-light bg-brand-white p-7 flex flex-col justify-between transition-all hover:border-brand-ink/40 hover:shadow-subtle"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-neutral">
                    <span className="rounded bg-brand-cream border border-brand-light px-2 py-0.5 text-[10px] uppercase">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-brand-ink hover:text-brand-red transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-brand-neutral leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-light/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-7 w-7 rounded-full overflow-hidden bg-brand-soft">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-mono text-brand-ink font-medium">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-display font-medium text-brand-red uppercase tracking-wider hover:underline"
                  >
                    Read
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
