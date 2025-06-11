import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DietasModule } from './dietas/dietas.module';
import { CalculosModule } from './calculos/calculos.module';
import { UsuariosController } from './usuarios/usuarios.controller';
import { DietasController } from './dietas/dietas.controller';
import { CalculosController } from './calculos/calculos.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { DietasService } from './dietas/dietas.service';
import { CalculosService } from './calculos/calculos.service';

@Module({
  imports: [UsuariosModule, DietasModule, CalculosModule],
  controllers: [UsuariosController, DietasController, CalculosController],
  providers: [UsuariosService, DietasService, CalculosService],
})
export class AppModule {}
