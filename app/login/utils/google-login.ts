import { GOOGLE_LOGIN_URL } from "./constants";
import axios from "axios";

export async function googleLogin() {
  try {
    const response = await axios.get(GOOGLE_LOGIN_URL);

    if (!response.status)
      throw new Error(`Error during Google login: ${response.statusText}`);
    const data = await response.data;
    return data;
  } catch (error: any) {
    console.error(`Error loggin in with Google: ${error.message}`);
    throw error;
  }
}
