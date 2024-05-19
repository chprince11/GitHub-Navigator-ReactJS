// src/components/UserCard.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserCard = ({ user }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src={user.avatar_url}
            alt={user.name}
            className="img-fluid rounded-circle mt-3 user-avatar"
            onClick={() => window.open(user.html_url, "_blank")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.bio}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Followers:</strong>
                <span className="badge bg-primary rounded-pill">
                  {user.followers}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Following:</strong>
                <span className="badge bg-primary rounded-pill">
                  {user.following}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Repos:</strong>
                <span className="badge bg-primary rounded-pill">
                  {user.public_repos}
                </span>
              </li>
            </ul>
            <div className="mt-3" id="repos">
              {user.repos &&
                user.repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    className="btn btn-outline-primary btn-sm me-1 mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
