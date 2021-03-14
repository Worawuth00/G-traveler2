import React from "react";

const Message = (props) => {
  return (
    <div className="message">
      <p>{props.children}</p>
    </div>
  );
};

export default Message;
