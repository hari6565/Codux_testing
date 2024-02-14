import axios from "axios";

export const CheckUser = async (state) => {
  //   console.log(state);
  try {
    const response = await axios.post("http://192.168.2.110:4000/login", state);
    console.log(response.data);
    console.log(response.data.user);
    if (response.status == 200) {
      if (response.data.user.role === "admin") {
        return "admin";
      } else if (response.data.user.role === "user") {
        return "user";
      } else {
        return false;
      }
    }
    return false;
  } catch (err) {
    return false;
  }
};
