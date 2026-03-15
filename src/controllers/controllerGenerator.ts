import { Request, Response } from "express";
import { generateStartupNames } from "../services/NameGeneratorService";
import { generateSchema } from "../validators/generatorValidators";

export async function generateNames(req: Request, res: Response) {

 const result = generateSchema.safeParse(req.body);

 if (!result.success) {

  return res.status(400).json({
   error: result.error.format()
  });

 }

 const { words, amount } = result.data;

 const names = generateStartupNames(words, amount);

 return res.json({
  count: names.length,
  names
 });

}