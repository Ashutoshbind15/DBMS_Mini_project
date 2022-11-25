import axios from "axios";

export default function Home({ exams }) {
  return <div>{JSON.stringify(exams)}</div>;
}

export const getStaticProps = async () => {
  const { data } = await axios.get("http://localhost:3001/exam");

  return {
    props: {
      exams: data,
    },
  };
};
