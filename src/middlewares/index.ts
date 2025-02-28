import { NextFunction, Request, Response } from "express";
import { BadRequestException } from '@nestjs/common';


export function Validation(req: Request, res: Response, next: NextFunction) {
    const { name, age, grade } = req.body
    if (!name) throw new BadRequestException('invalid name')
    if (!age) throw new BadRequestException('invalid age')
    if (!grade) throw new BadRequestException('invalid grade')
    next()
}