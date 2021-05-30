import GenericServices from "./GenericServices";

class UserServices extends GenericServices {
 

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
