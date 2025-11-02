import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        // Replace with your API call:
        // const res = await fetch(`/api/posts/${id}`);
        // const data = await res.json();
        const data = {
          id,
          title: "Sample Post Title",
          content:
            "This is a detailed post content. You can include multiple paragraphs, code snippets, or images here. Make sure it’s engaging and readable.",
          author: "Jane Doe",
          date: "October 31, 2025",
          tags: ["react", "tailwind", "frontend"],
        };
        setPost(data);
      } catch (err) {
        toast.error("Failed to load post.");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <p className="text-gray-600 animate-pulse">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <p className="text-gray-600">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          {post.title}
        </h1>

        {/* Author & Date */}
        <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-sm mb-6">
          <span>By <strong>{post.author}</strong></span>
          <span>{post.date}</span>
        </div>

        {/* Content */}
        <div className="prose prose-md sm:prose-lg max-w-none text-gray-700 mb-6">
          {post.content.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back Button */}
        <Link
          to="/posts"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
        >
          Back to Posts
        </Link>
      </div>
    </div>
  );
}
