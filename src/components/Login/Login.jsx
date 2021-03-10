import React, { Component } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonList,
  IonButton,
} from "@ionic/react";
import { withAuth } from "../Context/AuthContext";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "" || password === "") {
      alert("Los campos no pueden estar vacíos");
    } else {
      this.props.handleLogin({
        username,
        password,
      });
    }
  };
  render() {
    const { username, password } = this.state;
    const { errorLogin } = this.props;
    return (
      <IonPage>
        <IonContent>
          <IonList>
            <IonItem style={{ marginTop: 300 }}>
              <IonInput
                value={username}
                placeholder="Nombre de usuario"
                onIonChange={this.handleChange}
                name="username"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                value={password}
                placeholder="Contraseña"
                name="password"
                onIonChange={this.handleChange}
                type="password"
              ></IonInput>
            </IonItem>
            <IonButton
              color="primary"
              expand="full"
              onClick={this.handleFormSubmit}
            >
              Iniciar sesión
            </IonButton>
          </IonList>
          <p style={{ color: "red" }}>{errorLogin}</p>
        </IonContent>
      </IonPage>
    );
  }
}

export default withAuth(Login);
