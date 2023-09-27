'use client';

import { createArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type BlogType = {
  id: string;
  title: string;
  content: string;
};

const CreateBlogPage = () => {
  const [blogInfo, setBlogInfo] = useState<BlogType>({
    id: '',
    title: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // await createArticle(blogInfo.id, blogInfo.title, blogInfo.content);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const { id, title, content } = blogInfo;

    await fetch(`${API_URL}/api/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, title, content }),
    });

    setLoading(false);

    router.push('/');
    router.refresh();
  };
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
      <form
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBlogInfo({ ...blogInfo, id: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBlogInfo({ ...blogInfo, title: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setBlogInfo({ ...blogInfo, content: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className={`py-2 px-4 border rounded-md ${
            loading
              ? 'bg-orange-300 cursor-not-allowed'
              : 'bg-orange-400 hover:bg-orange-500'
          } `}
          disabled={loading}
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
