import GenericServices from "./GenericServices";

class UserServices extends GenericServices {
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("/api/login/", { email, password }).then((token) => {
        localStorage.setItem("token", token);
        resolve(token);
      });
    });

  register = (organization_name, password, email, ntn, contact, address) =>
    this.post("/api/profile/", {
      organization_name,
      password,
      email,
      ntn,
      contact,
      address,
    });

  logout = () => {
    localStorage.removeItem("token", "");
  };

  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
}

let userServices = new UserServices();
export default userServices;
