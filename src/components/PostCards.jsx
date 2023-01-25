import React from 'react'

const PostCards = ({title, }) => {
  return (
    <div className="card">
      <div className="card-header">
        {props.header}
      </div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
};

export default Card;