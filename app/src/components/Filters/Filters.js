import React, { useState } from 'react';
import './Filters.scss';
import classNames from 'classnames';

function Filters({colorFilter, colorFilterChangeCallback}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const ColorBlock = ({color}) => {
    return (
      <span style={{
        backgroundColor: color,
        width: '14px',
        height: '14px',
        display: 'inline-block',
        margin: '0 4px 0 12px',
      }}></span>
    );
  };

  const onTitleClick = () => {
    setIsCollapsed(!isCollapsed);
  }

  const onColorFilterChange = (evt) => {
    if (colorFilterChangeCallback) {
      colorFilterChangeCallback(evt.target.name);
    }
  }

  return (
    <div className="filters">
      <div className="filters__label" onClick={onTitleClick}>
        <span>Filter by</span>
        <span
          className={classNames(['filters__icon', { 'filters__icon--is-transformed': !isCollapsed }])}
        ></span>
      </div>
      <div className={classNames(['filters__content', { 'filters__content--is-active': !isCollapsed }])}>
        <div className="filter">
          <p className="filter__name">Color</p>
          {
            colorFilter.map((filterOption) => 
              <label className="filter__option" key={filterOption.name}>
                <div className="checkbox">
                  <input
                    className="checkbox__input"
                    type="checkbox"
                    name={filterOption.type}
                    checked={filterOption.state}
                    onChange={onColorFilterChange}
                  />
                  <span className="checkbox__tick"/>
                </div>
                <ColorBlock color={filterOption.color} />
                {filterOption.name}
              </label>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Filters;
