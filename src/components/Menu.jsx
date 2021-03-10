import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  bookmarkOutline,
  mailOutline,
  mailSharp,
  settingsOutline,
  personOutline,
  podiumOutline,
} from "ionicons/icons";
import "./Menu.css";
import { withAuth } from "./Context/AuthContext";

const appPages = [
  {
    title: "Inicio",
    url: "/home",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Ajustes",
    url: "/settings",
    iosIcon: settingsOutline,
    mdIcon: settingsOutline,
  },
  {
    title: "Top",
    url: "/top",
    iosIcon: podiumOutline,
    mdIcon: podiumOutline,
  },
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu = (props) => {
  const location = useLocation();
  const { user } = props;
  return (
    <>
      {user && (
        <IonMenu contentId="main">
          <IonContent>
            <IonList id="inbox-list" style={{ marginTop: 20 }}>
              <IonListHeader>{user.username}</IonListHeader>
              <IonNote>{user.description}</IonNote>
              {appPages.map((appPage, index) => {
                return (
                  <Link to={appPage.url}>
                    <IonMenuToggle key={index} autoHide={false}>
                      <IonItem
                        className={
                          location.pathname === appPage.url ? "selected" : ""
                        }
                        lines="none"
                        detail={false}
                      >
                        <IonIcon
                          slot="start"
                          ios={appPage.iosIcon}
                          md={appPage.mdIcon}
                        />
                        <IonLabel>{appPage.title}</IonLabel>
                      </IonItem>
                    </IonMenuToggle>
                  </Link>
                );
              })}
            </IonList>

            <IonList id="labels-list">
              <IonListHeader>Labels</IonListHeader>
              {labels.map((label, index) => (
                <IonItem lines="none" key={index}>
                  <IonIcon slot="start" icon={bookmarkOutline} />
                  <IonLabel>{label}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonContent>
        </IonMenu>
      )}
      ;
    </>
  );
};

export default withAuth(Menu);
