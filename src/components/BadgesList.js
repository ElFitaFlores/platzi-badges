import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

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
              <Link
                to={`/badge/${badge.id}/edit`}
                className="text-reset text-decoration-none"
              >
                <div className="BadgesListItem">
                  <Gravatar
                    className="BadgesListItem__avatar"
                    email={badge.email}
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
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
