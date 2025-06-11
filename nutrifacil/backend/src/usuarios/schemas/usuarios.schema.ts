import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usuario extends Document {
    @Prop({ required: true })
    nome: string;

    @Prop({ required: true })
    dieta: string;

    @Prop({ required: true })
    peso: number;

    @Prop({ required: true })
    altura: number;

    @Prop({ required: true })
    idade: number;

    @Prop({ required: true })
    sexo: string;

    @Prop({ required: true })
    objetivo: string;

    @Prop({ type: [String], required: true })
    alergias: string[];
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);