import React, { Component } from "react";
import { IonTabButton, IonIcon, IonLabel, IonBadge } from "@ionic/react";
import { home, person, notifications, search } from "ionicons/icons";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";
import { DivMenu } from "../../css/index";
import "../../css/styles.css";

class BottomMenu extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        {user && (
          <DivMenu>
            <div
              style={{ width: "50%", padding: 5 }}
              className="background-color"
            >
              <Link to="/home">
                <IonTabButton>
                  <IonIcon icon={home} className="icon-menu" />
                  <IonLabel className="icon-menu">Inicio</IonLabel>
                </IonTabButton>
              </Link>
            </div>
            <div
              style={{ width: "50%", color: "white" }}
              className="background-color"
            >
              <Link to={`/notifications`}>
                <IonTabButton>
                  <IonIcon icon={notifications} className="icon-menu" />
                  <IonLabel className="icon-menu">Notificaciones</IonLabel>
                  <IonBadge className="badge-notifications">6</IonBadge>
                </IonTabButton>
              </Link>
            </div>
            <div
              style={{ width: "50%", color: "white" }}
              className="background-color"
            >
              <Link to={"/search"}>
                <IonTabButton>
                  <IonIcon icon={search} className="icon-menu" />
                  <IonLabel className="icon-menu">Buscar</IonLabel>
                </IonTabButton>
              </Link>
            </div>
            <div
              style={{ width: "50%", color: "white" }}
              className="background-color"
            >
              <Link to={`/profile/${user.username}`}>
                <IonTabButton>
                  <IonIcon icon={person} className="icon-menu" />
                  <IonLabel className="icon-menu">Perfil</IonLabel>
                </IonTabButton>
              </Link>
            </div>
          </DivMenu>
        )}
      </>
    );
  }
}

export default withAuth(BottomMenu);
