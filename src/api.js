const API_URL = (
  'https://mate-academy.github.io/react_people-table/api/people.json'
);

export const getPeople = async() => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.map(person => ({
    ...person,
    mother: data.find(woman => woman.name === person.motherName),
    father: data.find(man => man.name === person.fatherName),
  }));
};
