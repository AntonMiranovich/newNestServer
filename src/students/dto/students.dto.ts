import { IsInt, IsString } from "class-validator"

export class BodyDto {
    @IsString()
    name: string;
    grade: string;

    @IsInt()
    age: number;
}

export class IdDto {
    @IsString()
    id: string;
}