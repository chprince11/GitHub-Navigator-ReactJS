// src/App.js
import React, { useState } from "react";
import UserForm from "./UserForm";
import UserCard from "./UserCard";

const APIURL = "https://api.github.com/users/";

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const getUser = async (username) => {
    try {
      const res = await fetch(APIURL + username);
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      setUser(data);
      setError(null);
      getRepos(username);
    } catch (err) {
      setUser(null);
      setError("No profile with this username");
    }
  };

  const getRepos = async (username) => {
    try {
      const res = await fetch(APIURL + username + "/repos?sort=created");
      const data = await res.json();
      setUser((prevState) => ({ ...prevState, repos: data.slice(0, 5) }));
    } catch (err) {
      setError("Problem fetching repos");
    }
  };

  return (
    <div className="container mt-5">
      <UserForm getUser={getUser} />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {user && <UserCard user={user} />}
      <footer className="text-center mt-5">
        Developed by Prince Chauhan 🧑‍💻
      </footer>
    </div>
  );
};

export default App;
