import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const PersonName = ({ person }) => (
  <td>
    <Link to={`/people/${person.slug}`}>{person.name}</Link>
  </td>
);

PersonName.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    sex: PropTypes.string,
    born: PropTypes.number,
    died: PropTypes.number,
    fatherName: PropTypes.string,
    motherName: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
};
