import React, { useState } from "react";

const ListItem = props => {
  const [text, setText] = useState(props.element);
  return (
    <div>
      <li>{props.element}</li>
    </div>
  );
};

export default ListItem;
