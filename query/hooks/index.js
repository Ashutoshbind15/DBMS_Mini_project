import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getExams, postExams } from "../api";

export const useExamQuery = () =>
  useQuery({
    queryKey: ["exams"],
    queryFn: getExams,
  });

export const useExamMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation(postExams, {
    onSuccess: () => {
      queryClient.invalidateQueries("exams");
    },
  });

  return { create };
};
