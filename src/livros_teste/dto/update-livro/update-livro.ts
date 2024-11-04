import { PartialType } from "@nestjs/swagger";
import { CreateLivroDto } from "../create-livro/create-livro";

export class UpdateLivroDto extends PartialType(CreateLivroDto) {}
