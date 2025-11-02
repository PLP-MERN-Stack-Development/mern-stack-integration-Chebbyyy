import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    // Fetch post data by ID
    async function fetchPost() {
      try {
        // Replace with your API call:
        // const res = await fetch(`/api/posts/${id}`);
        // const data = await res.json();
        const data = {
          title: "Sample Post",
          content: "This is the existing content of the post.",
          tags: "react,tailwind",
        };
        setTitle(data.title);
        setContent(data.content);
        setTags(data.tags);
      } catch (err) {
        toast.error("Failed to load post.");
      }
    }
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      toast.error("Title and content are required.");
      return;
    }

    try {
      // Replace with your API call:
      // await fetch(`/api/posts/${id}`, { method: "PUT", body: JSON.stringify({ title, content, tags }) });

      toast.success("Post updated successfully!");
      navigate(`/posts/${id}`);
    } catch (err) {
      toast.error("Failed to update post.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Edit Post
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Enter post title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Write your post content..."
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Tags (comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="e.g. react, tailwind, webdev"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}
