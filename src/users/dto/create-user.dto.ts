import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    // @Matches(new RegExp(RegExHelper.senha), { message: MessageEnum.SENHA_VALIDA }) // Regex para definir os padrões da senha
    senha: string;

    @IsNotEmpty()
    tipo: string;
}