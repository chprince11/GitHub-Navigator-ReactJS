// src/components/UserForm.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = ({ getUser }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      getUser(username);
      setUsername("");
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search a Github User... E.g. chprince11"
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default UserForm;
