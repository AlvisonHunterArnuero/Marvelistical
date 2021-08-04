export const stringToHash = (string) => {
	// ts + priv+pub
	let hash = 0;
	if (string.length === 0) return hash;

	const arrPhrase = Array.from(string);
	arrPhrase.forEach((element) => {
		let char = string.charCodeAt(element);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	});

	return hash;
};
