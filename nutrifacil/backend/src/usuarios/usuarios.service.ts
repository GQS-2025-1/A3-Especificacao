import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './schemas/usuario.schema'

@Injectable()
export class UsuariosService {
    private usuarios: Usuario[] = [];

    create(createUsuarioDto: CreateUsuarioDto) {
        const usuario: Usuario = {
            id: Date.now(),
            ...createUsuarioDto,
        };      
        this.usuarios.push(usuario); // Simula a adição ao armazenamento
        return usuario;
    }

    findAll(): Usuario[] {
        return this.usuarios; // Retorna todos os usuários
    }
}
