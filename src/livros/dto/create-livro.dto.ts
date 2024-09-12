import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateLivroDto {
    @ApiProperty({ example: "Ensaio sobre a cegueira" })
    @IsNotEmpty()
    titulo: string;
    
    @ApiProperty({ example: "josé Saramargo" })
    @IsNotEmpty()
    autor: string;
    
    @ApiProperty({ example: "24/12/2024" })
    @IsNotEmpty()
    anoPublicacao: Date;
        
    @ApiProperty({ example: true })
    @IsNotEmpty()
    disponivel: boolean;
    
    @ApiProperty({ example: 50 })
    @IsNotEmpty()
    quantidade: number;
}