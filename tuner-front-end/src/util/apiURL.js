export const apiURL = () => {
    console.log('using apiURL')
    return window.location.hostname === "localhost" ? "http://localhost:3005" : null;
}