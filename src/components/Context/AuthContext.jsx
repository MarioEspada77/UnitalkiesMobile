import React, { Component, createContext } from "react";
import authService from "../../Services/authService";

const AuthContext = createContext();

const Provider = AuthContext.Provider;

const AuthConsumer = AuthContext.Consumer;

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthConsumer>
          {({
            isLoading,
            isLoggedin,
            user,
            errorLogin,
            handleLogin,
            handleLogout,
          }) => (
            <Comp
              {...this.props}
              isLoading={isLoading}
              errorLogin={errorLogin}
              isLoggedin={isLoggedin}
              user={user}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          )}
        </AuthConsumer>
      );
    }
  };
};

export default class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: undefined,
    isLoading: true,
    errorLogin: "",
  };

  componentDidMount() {
    authService
      .me()
      .then((user) => {
        this.setState({
          isLoggedin: true,
          user,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  handleLogin = (user) => {
    console.log(user);
    authService
      .login(user)
      .then((loggedUser) => {
        this.setState({
          isLoggedin: true,
          user: loggedUser,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          errorLogin: "Usuario o contraseña incorrectos",
        });
      });
  };

  handleLogout = () => {
    this.setState({
      isLoading: true,
    });
    authService
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: undefined,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isLoggedin: false,
          user: undefined,
        });
      });
  };

  render() {
    const { isLoading, isLoggedin, user, errorLogin } = this.state;
    const { children } = this.props;
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <Provider
          value={{
            isLoading,
            isLoggedin,
            errorLogin,
            user,
            handleLogin: this.handleLogin,
            handleLogout: this.handleLogout,
          }}
        >
          {children}
        </Provider>
      );
    }
  }
}
