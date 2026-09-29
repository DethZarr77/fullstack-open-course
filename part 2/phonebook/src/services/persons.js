import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

// for the 'already deleted on server example
// const getAll = () => {
//   const request = axios.get(baseUrl);
//   const nonExisting = {
//     name: "Wisemann",
//     number: "0986645322",
//     id: "999"
//   }
//   return request.then((response) => response.data.concat(nonExisting));
// };



const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const update = (id, person) => {
  const request = axios.put(`${baseUrl}/${id}`, person);
  return request.then((response) => response.data);
};

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  remove
};
