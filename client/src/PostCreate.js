import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="d-flex flex-column gap-2">
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary w-25">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
