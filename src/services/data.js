
const key = process.env.VUE_APP_API_KEY
const baseUrl = process.env.VUE_APP_ROOT_URI
import axios from 'axios'
// Get all photo
export async function getAll(page) {
  const data = await (axios.get(`${baseUrl}/photos?page=${page}`, {
    headers: {
      "Authorization": `Client-ID ${key}"`
    }
  }));
  return data.data
}


export async function getAll1(page) {
  const res = await axios.get(
    `https://secure-caverns-59009.herokuapp.com/photos?page=${page}`
  );
  return res.data;
}
// Get all photo by user
export async function getPhotoUser(username, page) {
  const res = await fetch(
    `${baseUrl}/users/${username}/photos?page=${page}&client_id=${key}`
  );
  // var lists;
  // if (res.ok != false) {
  //   lists = await res.json();
  // }
  // else {
  //   lists = ""
  // }
  const lists = await res.json();
  return lists;
}

// Get detail photo
export async function getDetailPhoto(id) {
  const res = await fetch(
    `${baseUrl}/photos/${id}?client_id=${key}`
  );
  const val = await res.json();
  return val;
}

// Get info mation users
export async function getInfoUser(username) {
  const res = await fetch(
    `${baseUrl}/users/${username}?client_id=${key}`
  );
  const info = await res.json();
  return info;
}