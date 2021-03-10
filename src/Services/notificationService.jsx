import axios from "axios";

class notificationService {
  constructor() {
    this.notification = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials: true,
    });
  }

  listAllNotifications() {
    return this.notification.get("/notification/all").then(({ data }) => data);
  }
}

const notificationServices = new notificationService();

export default notificationServices;
