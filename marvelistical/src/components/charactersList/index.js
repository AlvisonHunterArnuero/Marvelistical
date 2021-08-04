import Character from "../character";
const CharactersList = ({ data }) => {
	let {
		data: { results },
	} = data;
	console.log("characters card", results);
	return (
		<div className="row justify-content-between my-4">
			{Object.values(results).map((values, i) => (
				<Character key={i} resultValues={values} />
			))}
		</div>
	);
};

export default CharactersList;
