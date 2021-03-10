import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonIcon,
  IonToggle,
} from "@ionic/react";
import { moon } from "ionicons/icons";

const Settings = () => {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Modo oscuro</h2>
        <IonList className="ion-margin-top">
          <IonItem>
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonList>
        <p>Ajustes</p>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
