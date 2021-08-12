import axios from 'axios';

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/videos`,
    withCredentials: true
  }),

  getVideos() {
    return this.service.get('/')
      .then(response => response.data)},

  getProfessionals() {
    return this.service.get('/ask')
      .then(response => response.data)},

  uploadVideo(data) {
    //because we send a formData we dont need to separate the values.

    //const {file, exercise, weight, weight_metric, rounds, reps, category, description} = data;
    // return this.service.post('/', {
    //   file,
    //   exercise,
    //   description,
    //   category,
    //   weight,
    //   weight_metric,
    //   reps,
    //   rounds,
    // })
    return this.service.post('/', data)
      .then(response => response.data)
  },

  addTagsVideo(data) {
    const {video_id, exercise, tags} = data;
    return this.service.post(`/${video_id}/tags`, {
      exercise,
      tags
    })
      .then(response => response.data)
  },

  addQuestionVideo(data){
    const {video_id, to_id, question} = data;
    return this.service.post(`/${video_id}/ask`, {
      to_id,
      question
    })
      .then(response => response.data)
  },

  addReplyVideo(data) {
    const {comment_id, reply} = data;
    return this.service.post(`/${comment_id}/reply`, {
      reply,
    })
      .then(response => response.data)
  }
}