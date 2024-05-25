import React from 'react';

function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Implement filters UI */}
    </div>
  );
}

export default Filters;