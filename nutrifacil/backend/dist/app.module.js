"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const dietas_module_1 = require("./dietas/dietas.module");
const calculos_module_1 = require("./calculos/calculos.module");
const usuarios_controller_1 = require("./usuarios/usuarios.controller");
const dietas_controller_1 = require("./dietas/dietas.controller");
const calculos_controller_1 = require("./calculos/calculos.controller");
const usuarios_service_1 = require("./usuarios/usuarios.service");
const dietas_service_1 = require("./dietas/dietas.service");
const calculos_service_1 = require("./calculos/calculos.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [usuarios_module_1.UsuariosModule, dietas_module_1.DietasModule, calculos_module_1.CalculosModule],
        controllers: [usuarios_controller_1.UsuariosController, dietas_controller_1.DietasController, calculos_controller_1.CalculosController],
        providers: [usuarios_service_1.UsuariosService, dietas_service_1.DietasService, calculos_service_1.CalculosService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map