import React from "react";

interface Props {
  id: number;
  title: string;
}

const GroupItem = ({ id, title }: Props) => {
  return (
    <div>
      {id} , {"title" + title}
    </div>
  );
};

export default GroupItem;
