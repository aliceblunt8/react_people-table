import React, { useEffect, useState } from 'react';
import { getPeople } from '../api';
import { PeopleTable } from './PeopleTable';

export const PeoplePage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async() => {
      const data = await getPeople();

      setPeople(data);
    })();
  },
  []);

  return (
    <div>
      <h2>People</h2>
      <PeopleTable people={people} />
    </div>
  );
};
