

export function addPeople(people) {
    return async function(dispatch, getState) {

        let { peopleReducer } = getState();
        let peopleArray = peopleReducer.people;

        peopleArray.push(people);

        dispatch({
            type: 'ADD_PEOPLE',
            data: peopleArray
        });
    }
}

export function editPeople(people) {
    return async function(dispatch, getState) {

        console.log(people);
        let { peopleReducer } = getState();
        let peopleArray = peopleReducer.people;

        let targetPeople = peopleArray.find((element) => element.key === people.key);

        targetPeople.name = people.name;
        targetPeople.age = people.age;
        targetPeople.street = people.street;
        targetPeople.building = people.building;
        targetPeople.number = people.number;
        targetPeople.companyAddress = people.companyAddress;
        targetPeople.companyName = people.companyName;
        targetPeople.gender = people.gender;

        dispatch({
            type: 'EDIT_PEOPLE',
            data: peopleArray
        });
    }
}