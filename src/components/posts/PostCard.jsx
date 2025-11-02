import { Link } from 'react-router-dom';
import { formatDate, truncateText, generateImageUrl } from '../../utils/helpers';

function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {post.featuredImage && (
        <Link to={`/posts/${post._id}`}>
          <img
            src={generateImageUrl(post.featuredImage)}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        </Link>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <Link to={`/posts/${post._id}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">
          {truncateText(post.content, 150)}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-2">
            {post.author.avatar && (
              <img
                src={generateImageUrl(post.author.avatar)}
                alt={post.author.username}
                className="w-6 h-6 rounded-full"
              />
            )}
            <span>{post.author.username}</span>
          </div>
          <span>{formatDate(post.createdAt)}</span>
        </div>
      </div>
    </article>
  );
}

export default PostCard;