import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = ({ serviceId }) => {
  const [comments, setComments] = useState([])
  useEffect( () => {
    axios.get(`/api/services/${serviceId}/comments`)
      .then( res => {
        setComments(res.data)
      })
      .catch( err => console.log(err))
  }, [])
  
  // const addPost = (blogId, post) => {
  const addComment = (comment) => {
    axios.post(`/api/services/${serviceId}/comments`, { comment } )
      .then( res => {
        setComments([...comments, res.data])
      })
      .catch( err => console.log(err))
  }
  
  const updateComment = (id, comment) => {
    axios.put(`/api/services/${serviceId}/comments/${id}`, { comment } )
      .then( res => {
        const updatedComments = comment.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setComments(updatedComments)
      }).catch( err => console.log(err))
  }
  
  const deleteComment = (id) => {
    axios.delete(`/api/services/${serviceId}/comments/${id}`)
      .then( res => {
        setComments( comments.filter( c => c.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }
  
  return (
    <>
      <h1>Comments</h1>
      <CommentForm addComment={addComment} />
      <CommentList 
        serviceId={serviceId} 
        comments={comments} 
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    </>
  )
}

export default Comments;