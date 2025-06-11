import { Document } from 'mongoose';
export declare class Usuario extends Document {
    nome: string;
    dieta: string;
    peso: number;
    altura: number;
    idade: number;
    sexo: string;
    objetivo: string;
    alergias: string[];
}
export declare const UsuarioSchema: import("mongoose").Schema<Usuario, import("mongoose").Model<Usuario, any, any, any, Document<unknown, any, Usuario, any> & Usuario & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Usuario, Document<unknown, {}, import("mongoose").FlatRecord<Usuario>, {}> & import("mongoose").FlatRecord<Usuario> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
