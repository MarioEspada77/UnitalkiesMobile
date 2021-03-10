import React, { Component } from "react";
import { IonContent, IonSlides, IonSlide } from "@ionic/react";
import "../../css/styles.css";
const slideOpts = {
  initialSlide: 0,
  speed: 400,
};
class search extends Component {
  render() {
    return (
      <IonContent>
        <div className="slides-heigt">
          <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <p>hola</p>
            </IonSlide>
            <IonSlide>
              <div className="slide-option">
                <h1>Slide 2</h1>
              </div>
            </IonSlide>
            <IonSlide>
              <h1>Slide 3</h1>
            </IonSlide>
            <IonSlide>
              <h1>Slide 4</h1>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    );
  }
}

export default search;
