import React from 'react';
import PropTypes from 'prop-types';

export default function ExpandCollapse({ excerpt, children }) {
  const [isExpanded, setExpanded] = React.useState(false);
  return (
    <>
      <h3>
        {excerpt}
        <button
          aria-expanded={isExpanded ? 'true' : 'false'}
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </h3>
      <div>{isExpanded && children}</div>
    </>
  );
}

ExpandCollapse.propTypes = {
  excerpt: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
