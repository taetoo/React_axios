import axios from "axios";

const BOARD_API_BASE_URL = "http://localhost:8080/boards";

class ApiService {
  fetchWebBoards() {
    return axios.get(BOARD_API_BASE_URL + "/list");
  }
}

export default new ApiService();
