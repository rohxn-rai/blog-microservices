const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation.";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    return (
      <li
        key={comment.id}
        className={`${
          comment.status === "rejected"
            ? "text-danger"
            : comment.status === "pending"
            ? "text-muted"
            : null
        }`}
      >
        {content}
      </li>
    );
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
