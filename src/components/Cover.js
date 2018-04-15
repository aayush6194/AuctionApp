import React from 'react';


function Cover(props) {
  var css = "cover " + props.display;
  return <div className={css} />;
}

export default Cover;
