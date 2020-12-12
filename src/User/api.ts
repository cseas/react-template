import axios from "axios";

export async function getUser() {
  return await axios
    .get("https://randomuser.me/api/?inc=name")
    .then((response) => response.data.results[0]);
}
