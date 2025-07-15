import api from "./api";



export const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { token, user  } = response.data;

      console.log("User Data", user);
      

    } catch (error) {
     
      throw error;
    }
  };