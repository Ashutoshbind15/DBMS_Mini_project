import axios from "axios";
import ExamList from "../components/Layout/Exams/ExamList";

export default function Home({ exams }) {
  return (
    <div>
      <ExamList exams={exams} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get("http://localhost:3001/exam");

  console.log(data);

  return {
    props: {
      exams: data,
    },
  };
};
