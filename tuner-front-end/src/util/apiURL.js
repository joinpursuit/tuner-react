export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3011"
      : "https://sheltered-island-89188.herokuapp.com";
  };
  