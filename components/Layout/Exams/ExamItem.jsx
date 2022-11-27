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
    <div className="flex items-center">
      <div className="w-1/12">{duration} hours </div>
      <div className="w-2/12">{date ? format(parseISO(date), "PPP") : ""}</div>
      <div className="w-1/12">{settername}</div>
      <div className="w-1/12">{dept_name}</div>
      <div className="w-1/12">{title}</div>
      <div className="w-1/12">{start}</div>
      <div className="w-1/12">{end}</div>
      <div className="w-1/12">{subject_id}</div>
      <div>{id}</div>
    </div>
  );
};

export default ExamItem;
