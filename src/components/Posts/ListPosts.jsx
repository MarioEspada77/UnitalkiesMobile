import React, { Component } from "react";
import postServices from "../../Services/postService";
import { withAuth } from "../Context/AuthContext";
import userImage from "../../images/image_profile.jpg";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { getLinkPreview } from "link-preview-js";
import {
  heartOutline,
  heart,
  chatbubbleOutline,
  shareSocialOutline,
  heartSharp,
  ellipsisHorizontal,
} from "ionicons/icons";
class ListPosts extends Component {
  state = {
    likes: "",
    liked: "",
  };
  componentDidMount() {
    const { post } = this.props;
    this.setState({ likes: [...post.likes] });
    this.checkIfUserDidLike();
  }
  checkIfUserDidLike = () => {
    const { user } = this.props;
    const liked = this.props.post.likes.includes(user._id);
    this.setState({
      liked: liked ? true : false,
    });
  };
  handleLike = async () => {
    const { post, user } = this.props;
    const { liked } = this.state;
    const makeCall = liked
      ? postServices.createUnlike(post._id, user.username)
      : postServices.createLike(post._id, user.username);
    try {
      const makeLike = await makeCall;
      this.setState({
        liked: !liked,
        likes: [...makeLike.likes],
      });
    } catch (error) {
      console.log("Error like o unlike");
    }
  };
  render() {
    const { post } = this.props;
    const { liked, likes } = this.state;

    return (
      <div className="post-box">
        {post.commented_to && (
          <div className="top-comments">
            <div className="top-icon">
              <IonIcon
                icon={chatbubbleOutline}
                className="top-comments-comment"
              />
              <span className="span-top-comments">
                Ha comentado en la publicacion de
                <span className="span-username"> {post.username.username}</span>
              </span>
            </div>
          </div>
        )}
        <div
          className={
            post.commented_to
              ? "post-box-settings-comment"
              : "post-box-settings"
          }
        >
          <div>
            <div className="post-settings-wrap">
              <IonIcon
                icon={ellipsisHorizontal}
                onClick={() => {
                  console.log("Click");
                }}
                className="icon-user-actions"
              />
            </div>
          </div>
        </div>
        <div className="post-content-box">
          <div className="post-content">
            <div className="user-box">
              <img
                className="user-image"
                src={userImage}
                width="56px"
                height="56px"
              ></img>
              <p className="user-title">
                <Link
                  to={`/profile/${post.username.username}`}
                  className="link-style"
                >
                  {post.username.username}
                </Link>
              </p>
              <p className="user-publication-time">Hace 32 minutos</p>
            </div>
            <p className="post-text">{post.text}</p>
            <div className="post-reactions">
              <div className="reactions">
                <IonIcon icon={heart} class="heart-actions" />
                <span className="span-likes">{likes.length}</span>
              </div>
              <div className="reactions">
                <IonIcon icon={chatbubbleOutline} class="heart-actions" />
                <span className="span-likes"> 148</span>
              </div>
              <div className="reactions">
                <IonIcon icon={shareSocialOutline} class="heart-actions" />
                <span className="span-likes"> 24</span>
              </div>
            </div>
          </div>
          <div className="user-actions">
            <div className="user-action">
              <div className="user-option" onClick={this.handleLike}>
                {liked ? (
                  <IonIcon icon={heartSharp} className="like-active" />
                ) : (
                  <IonIcon icon={heartOutline} className="like-deactivated" />
                )}
                <span className="span-user-action">Me gusta</span>
              </div>
              <div className="user-option" onClick={() => console.log("CLICK")}>
                <IonIcon icon={chatbubbleOutline} className="comment-icon" />
                <span className="span-user-action">Comentar</span>
              </div>
              <div className="user-option">
                <IonIcon icon={shareSocialOutline} className="share-icon" />
                <span className="span-user-action">Compartir</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(ListPosts);
