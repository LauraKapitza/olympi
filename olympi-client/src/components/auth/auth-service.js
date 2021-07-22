// components/auth/auth-service.js

import axios from 'axios';

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/auth`,
    withCredentials: true
  }),

  login(email, password) {
    return this.service.post('/login', {email, password})
      .then(response => response.data)
  },

  signup(professional, username, email, password, city, fav_exercise, career_date, certifications, website, about) {
    return this.service.post('/signup', {
      professional,
      username,
      email,
      password,
      city,
      fav_exercise,
      career_date,
      certifications,
      website,
      about
    })
      .then(response => response.data)
  },

  loggedin() {
    return this.service.get('/loggedin')
      .then(response => response.data)
  },

  logout() {
    return this.service.get('/logout', {})
      .then(response => response.data)
  },

  edit(username, email, city, fav_exercise, career_date, certifications, website, about) {
    return this.service.post('/edit', {
      username,
      email,
      city,
      fav_exercise,
      career_date,
      certifications,
      website,
      about
    })
      .then(response => response.data)
  }
};