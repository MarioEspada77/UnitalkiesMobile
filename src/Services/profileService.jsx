import axios from "axios";

class profileService {
  constructor() {
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials: true,
    });
  }

  listUserProfile(username) {
    console.log(username)
    return this.profile.get(`/profile/${username}`).then(({ data }) => data);
  }
  updateProfile(username, name, surname, description) {
    return this.profile
      .put(`/profile/edit/${username}`, { description, name, surname })
      .then(({ data }) => data);
  }
}

const profileServices = new profileService();

export default profileServices;
