export const marvelApi = {
	// to be moved to a env file later
	publicKey: "a5abbf7e30af0cb9b267b95738be1cc2",
	privateKey: "85b1464877ede017b2473ab4cf520cee17fa406b",
	baseUrl: "http://gateway.marvel.com/v1/public/",
};

export const stringToHash = (string) => {
	let hash = 0;
	if (string.length == 0) return hash;

	arrPhrase = Array.from(string);
	arrPhrase.forEach((element) => {
		let char = string.charCodeAt(element);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	});

	return hash;
};
