import React from "react";

const Comment = ({ gsx$comment }) => {
  return (
    <>
      <hr />
      <a
        title="הערות"
        className="linkWinthoutUnderline dec-off"
        href={"javascript:void(0)"}
      >
        <span style={{ direction: "ltr" }}>{gsx$comment}</span>
        <i className="fa fa-fw fa fa-comment"></i>
      </a>
    </>
  );
};

export default Comment;
