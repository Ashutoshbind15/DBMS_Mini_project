import axios from "axios";

const Examapi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
});

export const getExams = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/exam`);
  return data;
};

export const postExams = async (exam) => {
  const { data } = await Examapi.post("/exam", exam);
  return data;
};

export default Examapi;
