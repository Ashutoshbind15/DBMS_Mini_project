import React from "react";

import { format, parseISO } from "date-fns";

const ExamItem = ({
  id,
  duration,
  date,
  instructions,
  requirements,
  settername,
  dept_name,
  title,
  subject_id,
  start,
  end,
}) => {
  return (
    <div className="flex justify-around items-center ">
      <div>{id}</div>
      <div>{duration} hours </div>
      <div>{format(parseISO(date), "PPP")}</div>
      <div>{settername}</div>
      <div>{dept_name}</div>
      <div>{title}</div>
      <div>{start}</div>
      <div>{end}</div>
      <div>{subject_id}</div>
    </div>
  );
};

export default ExamItem;
