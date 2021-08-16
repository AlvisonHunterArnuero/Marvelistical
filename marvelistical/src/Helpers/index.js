export const StoriesCreators = (argCreatorsCollection) => {
	const objCreatorsInformation = {
		name: "",
		role: "",
	};

	const arrItemsLength = argCreatorsCollection.items.length;
	switch (arrItemsLength) {
		case 0:
			objCreatorsInformation.name = "Mary Major";
			objCreatorsInformation.role = "Fake Chief Editor";
			break;

		case 1:
			objCreatorsInformation.name = argCreatorsCollection.items[0].name;
			objCreatorsInformation.role = argCreatorsCollection.items[0].role;
			break;

		case 2:
			objCreatorsInformation.name = `${argCreatorsCollection.items[0].name} & ${argCreatorsCollection.items[1].name}`;
			objCreatorsInformation.role = `${argCreatorsCollection.items[0].role} & ${argCreatorsCollection.items[1].role} respectively`;
			break;
		default:
			objCreatorsInformation.name = `${argCreatorsCollection.items[0].name} & ${argCreatorsCollection.items[1].name}`;
			objCreatorsInformation.role = `${argCreatorsCollection.items[0].role} & ${argCreatorsCollection.items[1].role} respectively`;
	}

	return objCreatorsInformation;
};
