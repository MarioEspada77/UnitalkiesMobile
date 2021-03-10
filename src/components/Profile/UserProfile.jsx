import React, { Component } from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonRouterOutlet,
  IonSpinner,
  IonPage,
} from "@ionic/react";
import profileServices from "../../Services/profileService";
import { userProfile } from "./profiles/user";
import { withAuth } from "../Context/AuthContext";
import Pullable from "react-pullable";

class UserProfile extends Component {
  state = {
    posts: [],
    profile: {},
    loading: true,
    isFollowing: null,
    error: null,
  };
  async componentDidMount() {
    this.loadProfile();
    const { user } = this.props;
    console.log("USER", user)
  }
  loadProfile = async () => {
    const { username } = this.props.match.params;
    console.log("PROFILE", username)
    try {
      const userProfile = await profileServices.listUserProfile(username);
      this.setState({
        profile: userProfile.userProfile,
        posts: userProfile.posts,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: "El perfil que estas buscando no existe o no esta disponoible.",
        loading: false,
      });
    }
  };
  render() {
    const { user } = this.props;
    const { profile, loading, posts, error } = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton autoHide={false} menu="main" />
            </IonButtons>
            <IonTitle className="header-title">
              {!error && !loading && <p>@{profile[0].username}</p>}
              {error && <p>Usuario no encontrado</p>}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <Pullable
          onRefresh={() => this.loadProfile()}
          centerSpinner={true}
          spinnerColor="#5260ff"
        ></Pullable>
        <IonContent>
          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}
          {loading && (
            <IonSpinner name="crescent" className="spinner-profile" />
          )}
          {!error && !loading && <div>{userProfile(profile, posts, user)}</div>}
        </IonContent>
      </IonPage>
    );
  }
}

export default withAuth(UserProfile);
