import { useEffect, useState } from "react";

import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div className="col" key={post.id}>
        <div className="card mb-4">
          <div className="card-body d-flex flex-column gap-2">
            <h3>{post.title}</h3>
            <CommentList postId={post.id} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
      {renderedPosts}
    </div>
  );
};

export default PostList;
