export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:7777"
      : null;
  };  