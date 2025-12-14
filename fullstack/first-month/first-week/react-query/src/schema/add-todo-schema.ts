import z from "zod";

export const addTodoSchema = z.object({
  content: z.string().nonempty("content is required"),
  title: z.string().nonempty("title is required"),
  isCompleted: z.boolean().optional(),
});
