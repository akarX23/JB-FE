import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Loading from "../Widgets/Loading/Loading";
import Layout from "./Layout";

import { auth } from "../actions/user_actions";

//MUI Theme
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../helpers/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

const Auth = (ComposedClass, authUsers = null) => {
  class AuthenticationCheck extends Component {
    state = {
      loading: false,
    };

    componentDidMount() {
      this.props.auth();
    }

    // componentWillReceiveProps(nextProps) {
    //   this.setState({ loading: false });
    // //   const { details, type } = nextProps.user;

    //   if (details && authUsers === false) this.props.history.push("/");
    //   else if (
    //     !details &&
    //     authUsers !== null &&
    //     (authUsers === true || authUsers.length > 0)
    //   ) {
    //     this.setState({ authRevoke: true });
    //   } else if (details && authUsers?.length && !authUsers.includes(type))
    //     this.setState({ authRevoke: true });
    // }

    render() {
      console.log(this.props.user);
      if (this.state.loading) return <Loading />;

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <ComposedClass user={this.props.user} {...this.props} />
          </Layout>
        </ThemeProvider>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ auth }, dispatch),
  });

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck);
};

export default Auth;
