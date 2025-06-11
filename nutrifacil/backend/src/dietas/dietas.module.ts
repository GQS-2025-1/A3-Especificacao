import { Module } from '@nestjs/common';
import { DietasController } from './dietas.controller';
import { DietasService } from './dietas.service';

@Module({
  controllers: [DietasController],
  providers: [DietasService]
})
export class DietasModule {}
