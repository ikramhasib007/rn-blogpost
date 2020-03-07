import React, { useContext } from 'react';
import { Context } from '../../context/blog';
import BlogPostForm from '../../components/BlogPostForm';

export default function EditScreen({ navigation, route }) {  
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((post) => post.id === route.params.id);

  return <BlogPostForm
    onSubmit={(title, content) => editBlogPost({id: route.params.id, title, content}, () => navigation.pop())}
    initialValues={{
      title: blogPost.title,
      content: blogPost.content
    }}
  />
}