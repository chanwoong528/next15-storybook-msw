import { http } from "../http";

const apiTemp = {
  getTodos: () => http.get('/todos').then((res) => res.data),
}

export default apiTemp;