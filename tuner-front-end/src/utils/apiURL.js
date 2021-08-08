export const apiURL = () => {
	return window.location.hostname === 'localhost'
		? 'http://localhost:3005'
		: 'http://localhost:3005';
};
