import { z } from "zod";

export const generateSchema = z.object({

 words: z
  .array(z.string())
  .min(1, "Envie pelo menos uma palavra"),

 amount: z
  .number()
  .min(1)
  .max(50)
  .optional()

});