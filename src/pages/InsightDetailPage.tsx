import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Share2, Check, BookOpen, Clock, Calendar, User } from 'lucide-react';
import { insightsArticles } from '../data/insightsData';
import { Button } from '../components/ui/Button';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white">Article Not Found</h1>
        <p className="mt-3 text-sm text-[#9EBAAC]">
          The article you requested could not be located or may have been updated.
        </p>
        <div className="mt-6">
          <Button to="/insights" variant="primary">
            Return to Insights
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = insightsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 lg:py-16">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#7D9A8D] hover:text-[#00F5A0] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="pb-10 border-b border-[#142C20]">
          {/* Unboxed metadata line */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#7D9A8D] mb-4">
            <span className="text-[#00F5A0] font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            {article.title}
          </h1>

          <p className="mt-5 text-lg text-[#B5C7BF] leading-relaxed">
            {article.summary}
          </p>

          <div className="mt-8 pt-6 border-t border-[#12271D] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/founder-portrait.png`}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover object-top border border-[#00F5A0]/40 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-sm font-semibold text-white">
                  {article.author.name}
                </div>
                <div className="text-xs text-[#7D9A8D] font-mono">
                  {article.author.role}
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#091710] border border-[#163024] text-[#B5C7BF] hover:text-[#00F5A0] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00F5A0]" />
                  <span className="text-[#00F5A0]">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Article Body */}
        <div className="py-12 space-y-6 text-[#C2D2CB] text-base leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 pb-12 border-b border-[#142C20]">
          <div className="text-xs font-mono text-[#6A897B] uppercase mb-2">
            Keywords & Index Terms
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded bg-[#091710] border border-[#163024] text-[#B5C7BF]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="py-14">
          <h3 className="text-xl font-bold text-white mb-6">
            Related Technical Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                to={`/insights/${rel.slug}`}
                className="p-6 rounded-xl bg-[#08140F] border border-[#163024] hover:border-[#00F5A0]/40 transition-colors block group"
              >
                <div className="text-xs font-mono text-[#00F5A0] mb-2">
                  {rel.category} · {rel.readTime}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#00F5A0] transition-colors">
                  {rel.title}
                </h4>
                <p className="mt-2 text-xs text-[#8BA497] line-clamp-2">
                  {rel.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
