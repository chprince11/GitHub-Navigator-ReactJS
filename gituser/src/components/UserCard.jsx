// src/components/UserCard.js
import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 text-center">
          <img
            src={user.avatar_url}
            alt={user.name}
            className="img-fluid rounded-circle mt-3"
            onClick={() => window.open(user.html_url, "_blank")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.bio}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Followers:</strong> {user.followers}
              </li>
              <li className="list-group-item">
                <strong>Following:</strong> {user.following}
              </li>
              <li className="list-group-item">
                <strong>Repos:</strong> {user.public_repos}
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
