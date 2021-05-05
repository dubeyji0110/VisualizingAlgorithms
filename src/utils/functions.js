export const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

export const timeout = (ms) => {
	return new Promise((res) => setTimeout(res, ms));
};