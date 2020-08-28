import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return badge.firstName.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}
function BadgesList(props) {
  const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No encontramos ningún badge</h3>
        <Link to="/badge/new" className="btn btn-primary">
          Create new
        </Link>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                to={`/badge/${badge.id}`}
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
    </React.Fragment>
  );
}

export default BadgesList;
