import React from "react";

//In a Server Rendered project, there’s a case you want to render some components only from Client Side

const withMounted = (Component) => {
  return class OutputComponent extends React.Component {
    state = {
      hasMounted: false,
    };
    componentDidMount() {
      this.setState({ hasMounted: true });
    }
    render() {
      const { hasMounted } = this.state;
      return <Component {...this.props} hasMounted={hasMounted} />; // 1
    }
  };
};

export default withMounted;
