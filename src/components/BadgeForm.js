import React from "react";

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("Button clicked");
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" className="form-control" />
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
