import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

// Proper working getAll()

// const getAll = () => {
//   const request = axios.get(baseUrl);
//   return request.then((response) => response.data);
// };

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

const create = (newNote) => {
  const request = axios.post(baseUrl, newNote);
  return request.then((response) => response.data);
};

const update = (id, note) => {
  const request = axios.put(`${baseUrl}/${id}`, note);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
};
