import Menu from "./components/Menu";
import Page from "./pages/Page";
import React from "react";
import UserProfile from "./components/Profile/UserProfile";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { Switch } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./css/styles.css";
import AuthProvider from "./components/Context/AuthContext";
import AnonRoute from "./components/Login/AnonRoute";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import BottomMenu from "./components/Menus/BottomMenu";
import search from "./components/search/search";

const App: React.FC = () => {
  return (
    <IonApp>
      <AuthProvider>
        <IonRouterOutlet id="main">
          <Switch>
            <AnonRoute path="/" component={Login} exact />
            <PrivateRoute path="/home" component={Home} exact />
            <PrivateRoute path="/settings" component={Settings} exact />
            <PrivateRoute path="/search" component={search} exact />
            <PrivateRoute
              path="/profile/:username"
              component={UserProfile}
              exact
            />
          </Switch>
        </IonRouterOutlet>
        <Menu />
        <BottomMenu />
      </AuthProvider>
    </IonApp>
  );
};

export default App;
