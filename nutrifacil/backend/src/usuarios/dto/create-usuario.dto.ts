import { IsString, IsInt, IsEnum, IsArray } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    nome: string;

    @IsEnum(['Mediterrânea', 'Low Carb', 'Cetogênica', 'Vegetariana'])
    dieta: string;

    @IsInt()
    peso: number;

    @IsInt()
    altura: number;

    @IsInt()
    idade: number;

    @IsEnum(['Masculino', 'Feminino'])
    sexo: string;

    @IsString()
    objetivo: string;

    @IsArray()
    alergias: string[];
}
