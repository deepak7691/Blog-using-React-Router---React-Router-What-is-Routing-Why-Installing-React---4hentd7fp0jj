import React from 'react';
import { Link } from 'react-router-dom';

const items = [
    { name: 'Post 1', path: '/posts/1' },
    { name: 'Post 2', path: '/posts/2' },
    { name: 'Post 3', path: '/posts/3' },
    { name: 'Post 4', path: '/posts/4' }
];
export default function PostList() {
    return (
      <div className="posts">
        <h1>Post List</h1>
        <ul>
        {items.map(item => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
        ))}
        </ul>
      </div>
    )
  }