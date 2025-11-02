import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../services/api';
import { useForm } from '../../hooks/useForm';
import { validateImage } from '../../utils/helpers';
import Button from '../common/Button';
import Input from '../common/Input';

function PostForm({ onSubmit, initialValues = {} }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(initialValues.featuredImage || '');

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    validateAll,
    setValues
  } = useForm({
    title: initialValues.title || '',
    content: initialValues.content || '',
    category: initialValues.category?._id || '',
    tags: initialValues.tags?.join(', ') || ''
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { categories } = await getCategories();
        setCategories(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      validateImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Image validation failed:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('content', values.content);
    formData.append('category', values.category);
    formData.append('tags', values.tags.split(',').map(tag => tag.trim()));
    
    if (e.target.image.files[0]) {
      formData.append('featuredImage', e.target.image.files[0]);
    }

    setLoading(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.title}
        required
      />

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Featured Image
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-2"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full max-h-64 object-cover rounded-lg"
          />
        )}
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category
        </label>
        <select
          name="category"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-xs italic mt-1">{errors.category}</p>
        )}
      </div>

      <Input
        as="textarea"
        label="Content"
        name="content"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.content}
        rows="10"
        required
      />

      <Input
        label="Tags (comma-separated)"
        name="tags"
        value={values.tags}
        onChange={handleChange}
        placeholder="technology, programming, web development"
      />

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : initialValues.id ? 'Update Post' : 'Create Post'}
        </Button>
        <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default PostForm;