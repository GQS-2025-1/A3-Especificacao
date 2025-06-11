import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './schemas/usuario.schema';
export declare class UsuariosService {
    private usuarios;
    create(createUsuarioDto: CreateUsuarioDto): Usuario;
    findAll(): Usuario[];
}
