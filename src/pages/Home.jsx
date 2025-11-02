import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 pt-24 pb-16">
      {/* Hero Section */}
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Welcome to BlogHub ✍️
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          A place where creativity meets community. Share your stories, discover new ideas, 
          and connect with readers from around the world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/posts"
            className="px-6 py-3 rounded-lg text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md"
          >
            Explore Posts
          </Link>
          <Link
            to="/create-post"
            className="px-6 py-3 rounded-lg text-lg font-semibold bg-white/70 backdrop-blur-sm text-blue-700 border border-blue-300 hover:bg-white hover:shadow-lg transition-all"
          >
            Create a Post
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-20 grid md:grid-cols-3 gap-8 px-6 max-w-6xl">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">📚 Read & Learn</h3>
          <p className="text-gray-600">
            Dive into insightful posts from writers around the world on topics you love.
          </p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">🖋 Share Your Voice</h3>
          <p className="text-gray-600">
            Write about your passions, experiences, or expertise and inspire others.
          </p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-pink-700 mb-2">🌍 Connect & Grow</h3>
          <p className="text-gray-600">
            Engage with a global audience — comment, collaborate, and grow your influence.
          </p>
        </div>
      </section>
    </div>
  );
}
