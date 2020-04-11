import React from 'react';
import Info from './Info';

const CardInfo = ({ contacts=[] }) => {
  return (
    <div>
      {
        contacts.map((user, i) => {
          return (
            <Info
              key={i}
              id={contacts[i].id}
              name={contacts[i].name}
              email={contacts[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardInfo;