import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Francisco' })
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ example: 'francisco@gmail.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({ example: 'francisco@123' })
    @IsNotEmpty()
    // @Matches(new RegExp(RegExHelper.senha), { message: MessageEnum.SENHA_VALIDA }) // Regex para definir os padrões da senha
    senha: string;

    @IsNotEmpty()
    tipo: string;
}