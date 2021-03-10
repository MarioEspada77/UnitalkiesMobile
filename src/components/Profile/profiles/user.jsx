import React, { Component } from "react";
import userImage from "../../../images/image_profile.jpg";
import { IonButton } from "@ionic/react";
import Post from "../../Posts/Post";

const userProfile = (profile, posts, user) => {
  return (
    <div className="user-Profile">
      <div className="user-profile-card">
        <div className="user-profile-image">
          <div className="profile-user-image">
            <img
              src={userImage}
              width="96px"
              height="96px"
              className="round-user-image"
            ></img>
          </div>
        </div>
        <div className="user-profile-content">
          <div className="profile-content">
            <div className="profile-content-username">
              <span className="span-user-profile-content">
                {profile[0].name} {profile[0].surname}
              </span>
            </div>
            <div className="profile-content-username">
              <span className="span-user-profile-type">
                <p>Economia | UAB</p>
              </span>
            </div>
            <div className="profile-content-username">
              <span className="span-user-profile-type">
                <p>{profile[0].description}</p>
              </span>
            </div>
          </div>
          <div className="user-profile-stats">
            <span className="user-span-status">
              <span className="user-span-info">40</span>
              <p>Publicaciones</p>
            </span>
            <span className="user-span-status">
              <span className="user-span-info">12.4K</span>
              <p>Seguidores</p>
            </span>
            <span className="user-span-status">
              <span className="user-span-info">1241</span>
              <p>Siguiendo</p>
            </span>
          </div>
          {user.username === profile[0].username ? (
            <div className="user-edit-profile">
              <button className="button-edit-profile">Editar perfil</button>
            </div>
          ) : (
            <div className="user-profile-actions">
              <button className="button-sendMessage">Enviar mensaje</button>
              <button className="button-follow">Seguir</button>
            </div>
          )}
        </div>
      </div>

      <div className="user-Posts">
        <Post posts={posts} />
      </div>
    </div>
  );
};
export { userProfile };
