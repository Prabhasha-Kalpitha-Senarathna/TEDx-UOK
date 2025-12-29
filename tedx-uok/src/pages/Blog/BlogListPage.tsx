import React from "react";
import { useSEO } from "../../hooks/useSEO";
import { seoConfig } from "../../config/seo";

export default function BlogListPage() {
  useSEO(seoConfig.blog);
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-xl text-gray-400">Coming Soon</p>
    </div>
  );
}
