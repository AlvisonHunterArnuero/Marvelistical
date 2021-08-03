import Character from "../character";
const CharactersList = () => {
	return (
		<div className="row justify-content-between my-4">
			<Character hero="Black Panther" />
			<Character hero="Captain America" />
			<Character hero="Hulk" />
			<Character hero="WonderWoman" />
		</div>
	);
};

export default CharactersList;
