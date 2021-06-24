

const Comment = ({ author, subject, body, serviceId }) => {
  return(
    <>
      <h1>{author}</h1>
      <h2>{subject}</h2>
      <p>{body}</p>
    </>
  )
}

export default Comment;