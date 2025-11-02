import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { formatDate, generateImageUrl } from '../../utils/helpers';
import Button from '../common/Button';
import Input from '../common/Input';

function CommentSection({ postId, comments: initialComments }) {
  const { user } = useAuth();
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setSubmitting(true);
    try {
      // TODO: Implement addComment API
      const response = await addComment(postId, newComment);
      setComments([...comments, response.comment]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {user ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <Input
            as="textarea"
            rows="3"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            disabled={submitting}
          />
          <div className="mt-2">
            <Button type="submit" disabled={submitting || !newComment.trim()}>
              {submitting ? 'Posting...' : 'Post Comment'}
            </Button>
          </div>
        </form>
      ) : (
        <p className="text-gray-600 mb-8">
          Please <a href="/login" className="text-blue-600">login</a> to post a comment.
        </p>
      )}

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment._id} className="flex gap-4">
            {comment.user.avatar && (
              <img
                src={generateImageUrl(comment.user.avatar)}
                alt={comment.user.username}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">{comment.user.username}</span>
                <span className="text-gray-500 text-sm">
                  {formatDate(comment.createdAt)}
                </span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommentSection;