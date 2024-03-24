import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {

  const errors = validationResult(req);
  

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors: object[] = [];
  // estou add os errors dentro de um array para conseguir retornar todos os erros de uma vez
  //TODO: o Matheus trouxe o req.params, mas meu TS acusa erro, preciso pesquisar o que aconteceu.
  errors.array().map(err => extractedErrors.push({ [err.msg]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });

};