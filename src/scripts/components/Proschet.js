import React from 'react';
import PropTypes from 'prop-types';
import proschet from 'proschet';

function Proschet({ variants, count }) {
  const result = proschet(variants.split(', '));
  return <span className="proschet">{result(count)}</span>;
}

Proschet.propTypes = {
  variants: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Proschet;
