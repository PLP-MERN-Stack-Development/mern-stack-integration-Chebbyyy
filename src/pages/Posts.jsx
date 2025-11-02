import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Replace with real API call:
        // const res = await fetch("/api/posts");
        // const data = await res.json();
        const data = [
          {
            id: 1,
            title: "Getting Started with React and Vite",
            excerpt: "Learn how to set up a blazing-fast React app with Vite and Tailwind CSS.",
            author: "John Doe",
            date: "October 30, 2025",
            tags: ["react", "vite", "tailwind"],
          },
          {
            id: 2,
            title: "Tailwind CSS: Tips & Tricks",
            excerpt: "Boost your Tailwind workflow with these powerful tips and utilities.",
            author: "Jane Smith",
            date: "October 28, 2025",
            tags: ["tailwind", "css", "frontend"],
          },
          {
            id: 3,
            title: "Advanced React Patterns",
            excerpt: "Discover reusable React patterns for scalable and maintainable apps.",
            author: "Alex Johnson",
            date: "October 25, 2025",
            tags: ["react", "patterns", "javascript"],
          },
        ];
        setPosts(data);
      } catch (err) {
        toast.error("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <p className="text-gray-600 animate-pulse">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          All Posts
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">No posts available.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/posts/${post.id}`}
                className="block bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-400 overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
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
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
