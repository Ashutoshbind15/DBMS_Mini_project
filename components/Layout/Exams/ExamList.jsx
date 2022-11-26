import React from "react";
import ExamItem from "./ExamItem";

const ExamList = ({ exams }) => {
  return (
    <div className="px-4 py-8 flex flex-col ">
      {exams.map((el) => {
        return (
          <ExamItem
            key={el.id}
            duration={el.duration}
            date={el.date}
            settername={el.settername}
            dept_name={el.dept_name}
            title={el.title}
            id={el.id}
            subject_id={el.subject_id}
            start={el.start}
            end={el.end}
          />
        );
      })}
    </div>
  );
};

export default ExamList;
