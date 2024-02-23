import React from "react";

type Props = {};

const Comment = (props: Props) => {
  return (
    <>
      <div className="mt-3">
        <div className="relative">
          <p className="absolute">Ander</p>
          <p className="text-right mr-5">2023/03/01</p>
        </div>
        <p className="mt-3">Valoration: 4/5</p>
        <p className="mt-3">Comment: The best product ever</p>
      </div>
    </>
  );
};

export default Comment;
