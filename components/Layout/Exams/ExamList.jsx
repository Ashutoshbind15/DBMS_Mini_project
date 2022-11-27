import React from "react";
import ExamItem from "./ExamItem";

const ExamList = ({ exams }) => {
  return (
    <div className="px-4 py-8">
      <div className="">
        <ul className="flex font-bold">
          <li className="w-1/12">Duration</li>
          <li className="w-2/12">Date</li>
          <li className="w-1/12">Setter</li>
          <li className="w-1/12">Department</li>
          <li className="w-1/12">Branch</li>
          <li className="w-1/12">Subject</li>
          <li className="w-1/12">Starts</li>
          <li className="w-1/12">Ends</li>
          <li className="w-1/12">Subject_id</li>
        </ul>
      </div>
      {exams?.map((el) => {
        return (
          <div key={el.id}>
            <div className="flex flex-col">
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExamList;
