import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import postServices from "../../Services/postService";
import { PostStatus } from "./HomePost";
import Pullable from "react-pullable";

import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonSpinner,
  IonIcon,
} from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import "../../css/styles.css";

class Home extends Component {
  state = {
    ShowModal: false,
    posts: [],
    userPosts: [],
    loading: true,
    error: undefined,
    page: 0,
  };

  async componentDidMount() {
    this.loadPosts();
  }
  loadPosts = async () => {
    try {
      const posts = await postServices.listAllPost(this.props.user.username);
      console.log("posts");
      this.setState({
        posts,
        loading: false,
      });
      console.log("PAGES", this.state.page);
    } catch (error) {
      this.setState({
        loading: false,
        error: "En estos momentos no ha sido posible cargar las publicaciones.",
      });
    }
  };
  handleRefresh = () => {
    this.setState({ posts: [] });
    const success = this.loadPosts();
    if (success) {
      console.log("succes");
    } else {
      console.log("Error");
    }
  };
  render() {
    const { loading, error, posts } = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar className="header-title">
            <IonTitle className="header-title">Unitalkies</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Pullable
            onRefresh={() => this.handleRefresh()}
            centerSpinner={true}
            spinnerColor="#5260ff"
          ></Pullable>
          {loading && (
            <div className="loading">
              <IonSpinner name="crescent" className="spinner-home" />
            </div>
          )}
          {!error ? (
            !loading && PostStatus(posts)
          ) : (
            <div className="error-home">
              <div className="error-card">
                <IonIcon icon={alertCircleOutline} className="icon-error" />
                <span className="error-span">{error}</span>
              </div>
            </div>
          )}
        </IonContent>
      </IonPage>
    );
  }
}

export default withAuth(Home);
