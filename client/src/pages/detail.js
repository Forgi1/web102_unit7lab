
import './detail.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const Detail = () => {
  const { id } = useParams(); // Get the ID from URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select('*')
        .eq('id', id)
        .single(); // Ensures you get only one record

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data); // Set the fetched data into state
      }
    };

    fetchPost();
  }, [id]); // Dependency array includes 'id' to refetch if the ID changes

  if (!post) return <div>Loading post details...</div>; // Show a loading or not found message

  return (
    <div className="detailPage">
      <h1>{post.title}</h1>
      <h2>{post.author+" mph" }</h2>
      <p>{post.description}</p>
    </div>
  );
}

export default Detail;
