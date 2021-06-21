import React from 'react';

const FilterButton = ({active, name, setFilter}) => {
    return (
        <button
            type='button'
            className={`btn filter ${active ?  'checked': ''}`}
            onClick={() => setFilter(name)}
        >
            <span>{name}</span>
        </button>
    );
};

export default FilterButton;