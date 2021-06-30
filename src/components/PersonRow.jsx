import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { PersonName } from './PersonName';

export const PersonRow = ({ person }) => {
  const { slug } = useParams();

  return (
    <tr className={cn({ activeRow: slug === person.slug })}>
      <PersonName person={person} />
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      {person.mother ? (
        <PersonName person={person.mother} />
      )
        : (
          <td>{person.motherName}</td>
        )}
      {person.father ? (
        <PersonName person={person.father} />
      )
        : (
          <td>{person.fatherName}</td>
        )}
    </tr>
  );
};

PersonRow.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    sex: PropTypes.string,
    born: PropTypes.number,
    died: PropTypes.number,
    fatherName: PropTypes.string,
    motherName: PropTypes.string,
    slug: PropTypes.string,
    father: PropTypes.shape({
      name: PropTypes.string,
      sex: PropTypes.string,
      born: PropTypes.number,
      died: PropTypes.number,
      fatherName: PropTypes.string,
      motherName: PropTypes.string,
      slug: PropTypes.string,
    }),
    mother: PropTypes.shape({
      name: PropTypes.string,
      sex: PropTypes.string,
      born: PropTypes.number,
      died: PropTypes.number,
      fatherName: PropTypes.string,
      motherName: PropTypes.string,
      slug: PropTypes.string,
    }),
  }).isRequired,
};
