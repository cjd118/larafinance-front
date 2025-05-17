import { redirect } from "react-router";

export default function authLoader(loader = null) {
    return async (...args) => {
      const isAuthenticated = !!localStorage.getItem("user");
      if (!isAuthenticated) {
        return redirect("/auth/login");
      }
      return loader ? loader(...args) : null;
    };
  }