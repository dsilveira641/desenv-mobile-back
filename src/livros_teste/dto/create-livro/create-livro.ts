import { IsNotEmpty, IsString, IsInt, IsOptional, IsBoolean } from "class-validator";

export class CreateLivroDto {
    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsNotEmpty()
    @IsString()
    autor: string;

    @IsNotEmpty()
    @IsInt()
    ano: number;

    @IsOptional()
    @IsBoolean()
    disponivel?: boolean;

    @IsNotEmpty()
    @IsInt()
    quantidade: number;

    @IsOptional()
    imagem?: Buffer;
}
