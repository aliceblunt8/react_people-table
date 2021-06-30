import React from 'react';
import PropTypes from 'prop-types';
import { PersonRow } from './PersonRow';

export const PeopleTable = ({ people }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Sex</th>
        <th>Born</th>
        <th>Died</th>
        <th>Mother</th>
        <th>Father</th>
      </tr>
    </thead>
    <tbody>
      {people.map(person => (
        <PersonRow
          key={person.slug}
          person={person}
        />
      ))}
    </tbody>
  </table>
);

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    sex: PropTypes.string,
    born: PropTypes.number,
    died: PropTypes.number,
    fatherName: PropTypes.string,
    motherName: PropTypes.string,
    slug: PropTypes.string,
  })).isRequired,
};
