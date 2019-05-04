import React from 'react';

export default function List(props) {
    return(
      <ul className="breed-list">
          {props.items ? props.items.map((item) => {
              return <li>
                  {props.link(item)}
              </li>
          }): <span>No Results</span>}
      </ul>
    );
}
