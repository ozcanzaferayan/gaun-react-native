import axios from "axios";

async function fetchPeople() {
  const { data } = await axios.get("http://localhost:3004/people");
  return data;
}

export default fetchPeople;
