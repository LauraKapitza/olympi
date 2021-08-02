import axios from 'axios';

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/videos`,
    withCredentials: true
  }),

  getVideos() {
    return this.service.get('/')
      .then(response => response.data)
  }
}