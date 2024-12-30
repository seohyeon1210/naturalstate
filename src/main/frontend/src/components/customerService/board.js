import React from 'react';
import PostItem from './PostItem';  // PostItem 임포트

function Board() {
  const posts = [
    { id: 1, title: '게시글 제목 1', content: '게시글 내용 1' },
    { id: 2, title: '게시글 제목 2', content: '게시글 내용 2' },
  ];

  return (
    <div>
      <h2>게시판</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Board;
