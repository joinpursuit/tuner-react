export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3003"
      : "null";
  };