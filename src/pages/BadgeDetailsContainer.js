import React from "react";
import "./styles/BadgeDetails.css";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (e) {
      this.setState({ loading: false, error: e });
    }
  };
  render() {
    if (this.state.loading) return <PageLoading />;

    if (this.state.error) return <PageError error={this.state.error} />;

    return <BadgeDetails badge={this.state.data} />;
  }
}

export default BadgeDetailsContainer;
