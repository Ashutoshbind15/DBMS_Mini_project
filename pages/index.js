import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ExamList from "../components/Layout/Exams/ExamList";
import { useExamQuery, useExamMutations } from "../query/hooks";

export default function Home({ exams, departments, subjects, teachers }) {
  const { create } = useExamMutations();
  const [currSubid, setCurrSubId] = useState("");
  const [currTeacherId, setCurrTeacherId] = useState("");
  const { isLoading, error, isError, data: qexams } = useExamQuery();
  const queryClient = useQueryClient();
  const [currDisplay, setCurrDisplay] = useState(departments[0].id);
  const [duration, setDuration] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [ins, setIns] = useState("");
  const [reqd, setReqd] = useState("");

  const additionHandler = async () => {
    create.mutate({
      currSubid,
      currTeacherId,
      deptId: currDisplay,
      duration,
      start,
      end,
      ins,
      reqd,
    });
    setCurrSubId("");
    setCurrTeacherId("");
  };

  return (
    <div className="px-12 py-4">
      <select
        className="bg-blue-700 text-white font-semibold px-6"
        name=""
        id=""
        value={+currDisplay}
        onChange={(e) => setCurrDisplay(e.target.value)}
      >
        {departments.map((el) => {
          return (
            <option value={el.id} key={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>

      <ExamList
        exams={qexams?.filter((el) => el.department_id === +currDisplay)}
      />

      <form action="" className="flex flex-col items-start">
        <div className="px-4 flex flex-col">
          <select
            name=""
            id=""
            className="bg-blue-700 text-white font-semibold px-6 mb-2 py-1"
            onChange={(e) => setCurrSubId(e.target.value)}
          >
            <option value={""}>Select course</option>
            {subjects
              .filter((sub) => {
                let a = true;
                qexams?.forEach((exam) => {
                  if (
                    sub.course_id === exam.subject_id ||
                    sub.department_id !== +currDisplay
                  )
                    a = false;
                });
                return a;
              })
              .map((el) => {
                return (
                  <option value={el.course_id} key={el.course_id}>
                    {el.title}
                  </option>
                );
              })}
          </select>

          <select
            name=""
            id=""
            onChange={(e) => setCurrTeacherId(e.target.value)}
            className="bg-blue-700 text-white font-semibold px-6 mb-2 py-1"
          >
            <option value={""}>Select teacher</option>
            {teachers
              .filter((t) => t.department_id === +currDisplay)
              .map((el) => {
                return (
                  <option value={el.id} key={el.id}>
                    {el.name}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="hover:border-b-4">
          <input
            type="text"
            name=""
            id=""
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border-0 m-0 px-4 py-2 border-none outline-0"
            placeholder="Duration"
          />
        </div>

        <div className="hover:border-b-4">
          <input
            type="text"
            name=""
            id=""
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="border-0 m-0 px-4 py-2 border-none outline-0"
            placeholder="Start Time"
          />
        </div>
        <div className="hover:border-b-4">
          <input
            type="text"
            name=""
            id=""
            value={end}
            className="border-0 m-0 px-4 py-2 border-none outline-0"
            placeholder="Endtime"
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>

        <div className="hover:border-b-4">
          <input
            type="text"
            name=""
            id=""
            value={ins}
            className="border-0 m-0 px-4 py-2 border-none outline-0"
            placeholder="Instructions"
            onChange={(e) => setIns(e.target.value)}
          />
        </div>
        <div className="hover:border-b-4">
          <input
            type="text"
            name=""
            id=""
            value={reqd}
            className="border-0 m-0 px-4 py-2 border-none outline-0"
            onChange={(e) => setReqd(e.target.value)}
            placeholder="requirements"
          />
        </div>

        <button
          onClick={additionHandler}
          className="bg-blue-700 text-white font-semibold px-6 py-2 ml-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URI;

  const { data: exams } = await axios.get(`${baseUrl}/exam`);
  const { data: departments } = await axios.get(`${baseUrl}/department`);
  const { data: subjects } = await axios.get(`${baseUrl}/subject`);
  const { data: teachers } = await axios.get(`${baseUrl}/teacher`);

  return {
    props: {
      exams,
      departments,
      subjects,
      teachers,
    },
  };
};
