import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, Clock, Calendar, User } from 'lucide-react';
import { insightsArticles } from '../data/insightsData';

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Computational Methods',
    'Research',
    'Software Development',
    'Engineering',
    'Company Updates',
  ];

  const filteredArticles = useMemo(() => {
    return insightsArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 lg:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#142C20]">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-[#00F5A0] tracking-wider uppercase mb-3">
            TECHNICAL JOURNAL & ARTICLES
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Insights & Engineering Notes
          </h1>
          <p className="mt-5 text-lg text-[#9EBAAC] leading-relaxed">
            Explorations into structural reliability, computational mechanics, numerical algorithms,
            and the architecture of scientific software systems.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00F5A0] text-[#050D0A] font-semibold'
                    : 'bg-[#091710] text-[#9EBAAC] hover:text-white border border-[#163024]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#6A897B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-[#091710] border border-[#163024] text-white placeholder-[#5A796C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#08140F] border border-[#163024] max-w-xl mx-auto space-y-3">
            <BookOpen className="w-8 h-8 text-[#5A796C] mx-auto" />
            <h3 className="text-lg font-bold text-white">No articles found</h3>
            <p className="text-xs text-[#8BA497]">
              No articles match your active filter criteria. Try resetting the category or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-2 text-xs font-mono text-[#00F5A0] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="p-8 rounded-2xl bg-[#08140F] border border-[#163024] hover:border-[#00F5A0]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Clean unboxed metadata with bullet separators per constitution */}
                  <div className="flex items-center gap-2 text-xs text-[#7A988B] mb-3 font-mono">
                    <span className="text-[#00F5A0] font-semibold">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white hover:text-[#00F5A0] transition-colors leading-snug">
                    <Link to={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-[#9EBAAC] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0A1A13] border border-[#163024] text-[#B5C7BF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#122A1E] flex items-center justify-between">
                  <div className="text-xs text-[#7D9A8D]">
                    By <span className="text-white font-medium">{article.author.name}</span>
                  </div>

                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#00F5A0] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
