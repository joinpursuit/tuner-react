export const apiURL = () => {
    console.log('retrieving from API')
    return window.location.hostname === "localhost" ? "http://localhost:3005" : null;
}