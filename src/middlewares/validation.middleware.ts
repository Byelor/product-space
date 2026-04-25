import type { Request, Response, NextFunction } from "express";

type ValidationRules = Record<string, (value: any) => boolean>;
export const validate = (rules: ValidationRules) => (req: Request, res: Response, next: NextFunction)=>{

    for(const field in rules)
    {  
        
    }

    next();
};