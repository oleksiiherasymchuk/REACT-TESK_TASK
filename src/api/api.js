import axios from "axios";

// export let token = '';

const instance = axios.create({
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1/",
//   headers: {
//     'Token': token,
//   },
});

export const API = {
  async token() {
    const response = await instance.get(`token`);
    let token = response.data.token;
    instance.defaults.headers['Token'] = token;
    return token;
  },
  async getAllUsers(page = 1, count = 6) {
    const response = await instance.get(`users/?page=${page}&count=${count}`);
    return response.data;
  },
  async createUser(user) {
    try {   
      const response = await instance.post(`users`, user);
      console.log(response);
    } catch (error) {
        debugger
      console.log("API createuser", error);
    }
  },
  getOneUser(userId) {
    return instance.get(`users/${userId}`);
  },
  getPositions() {
    return instance.get(`positions`);
  },
};

// savePhoto(photoFile) {
//     const formData = new FormData();
//     formData.append("image", photoFile);
//     return instance.put(`profile/photo`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   },

// Working with REST API (GET). You will find API documentation (OpenAPI) here.
// a. Implement the “Working with a GET request” block according to the mockup and API
// documentation. Display 6 users on the API request result page. The "Show more" button
// should be hidden when the last page of API query results is reached. Users are sorted by
// registration date (the newest first).
// b. To display radio buttons on the registration form, use the GET /positions method from the API
// documentation.

// 3. Working with REST API (POST) – registration form block “Working with a POST Request”
// a. Implement front-end validation in accordance with mockups and API documentation.
// b. Implement the business logic of the registration form in accordance with mockups and API
// documentation.
// c. After successful registration, update the list of users in the “Working with a GET request” block.
// If the “Show more” button has been clicked (i.e. more than one page of users has been loaded
// from the API), collapse all and display only the first page of the result of the GET request. As a
// result, the new user will be displayed first and you will be able to check the correctness of the
// form without reloading the page.
