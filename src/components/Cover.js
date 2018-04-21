import React from 'react';


function Cover(props) {
  var css = "cover " + props.display;
  return <div className={css} onClick={props.modal}/>;
}

export default Cover;
