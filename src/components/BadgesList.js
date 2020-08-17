import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No encontramos ningún badge</h3>
          <Link to="/badge/new" className="btn btn-primary">
            Create new
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarUrl}
                  alt={`${badge.firstName} ${badge.lastName}`}
                />

                <div>
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                  <br />@{badge.twitter}
                  <br />
                  {badge.jobTitle}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
