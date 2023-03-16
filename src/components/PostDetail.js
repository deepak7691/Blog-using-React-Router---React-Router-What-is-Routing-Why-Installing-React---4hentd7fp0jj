import React from 'react';

export default function PostDetail({ match }) {
    return (
      <h1>Post Detail: {match.params.id}</h1>
    )
}
  