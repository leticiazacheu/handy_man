import { useState, useEffect } from 'react';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState({ author: "", subject: "", body: "" })
  const handleSubmit = (e) => {
    e.preventDefault()
    addComment(comment)
    setComment({ author: "", subject: "", body: "" })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="author"
        value={comment.author}
        onChange={(e) => setComment({ ...comment, author: e.target.value })}
        placeholder="author"
        required
      />
      <input
        name="subject"
        value={comment.subject}
        onChange={(e) => setComment({ ...comment, subject: e.target.value })}
        placeholder="author"
        required
      />
      <input
        type="body"
        name="body"
        value={comment.body}
        onChange={(e) => setComment({ ...comment, body: e.target.value })}
        placeholder="body"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default CommentForm;