import React from "react";

class BadgeForm extends React.Component {
  state = {};
  handleClick = (e) => {
    console.log("Button clicked");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.jobTitle}
            />
            <label>Twitter</label>
            <input
              type="text"
              name="twitter"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.twitter}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
            type="button"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
