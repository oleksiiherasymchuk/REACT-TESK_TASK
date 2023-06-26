import axios from "axios";

const instance = axios.create({
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1/",
});

export const API = {
  async getAllUsers(page = 1, count = 6) {
    const response = await instance.get(`users/?page=${page}&count=${count}`);
    return response.data;
  },
  async createUser(user) {
    try {
      const tokenResponse = await instance.get(`token`);
      const token = tokenResponse.data.token;

      const formData = new FormData();

      formData.append("position_id", user["position_id"]);
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("phone", user.phone);
      formData.append("photo", user.photo);

      const response = await instance.post(`users`, formData, {
        headers: {
          'Token': token,
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      alert(error.message,"Failed to create user. Please try again." )
    }
  },
  getOneUser(userId) {
    return instance.get(`users/${userId}`);
  },
  getPositions() {
    return instance.get(`positions`);
  },
};
