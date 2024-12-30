-import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

 function PostForm({ onSubmit }) {
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
     e.preventDefault();
     const newPost = {
       id: Date.now(),
       title,
       author,
       date: new Date().toISOString().split('T')[0],
       likes: 0,
     };
     onSubmit(newPost);
     navigate('/'); // 등록 후 목록으로 이동
   };

   return (
     <form onSubmit={handleSubmit}>
       <h1>게시글 등록</h1>
       <div>
         <label>제목: </label>
         <input value={title} onChange={(e) => setTitle(e.target.value)} required />
       </div>
       <div>
         <label>글쓴이: </label>
         <input value={author} onChange={(e) => setAuthor(e.target.value)} required />
       </div>
       <button type="submit">등록</button>
     </form>
   );
 }

 export default PostForm;