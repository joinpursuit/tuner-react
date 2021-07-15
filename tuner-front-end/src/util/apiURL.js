 const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3232"
      : "http://localhost:3232";
  };

  export default apiURL;