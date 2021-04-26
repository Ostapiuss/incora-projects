import React from 'react';
import { useSelector } from 'react-redux';

export const UserDetail = () => {
  const post = useSelector(state => state.post.currentPost);

  return (
    <h2>{ post.name }</h2>
  )
};