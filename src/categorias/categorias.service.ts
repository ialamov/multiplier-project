import { Body, Injectable } from '@nestjs/common';
import { AutoIncrement } from 'sequelize-typescript';
import { CategoriasController } from './categorias.controller';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  create(
    @Body()
    {
      codigo,
      titulo,
      status,
    }: {
      codigo: string;
      titulo: string;
      status: number;
    },
  ) {
    const newCategoria = {
      id: AutoIncrement,
      codigo,
      titulo,
      status,
    };
    return newCategoria;
  }

  findAll() {
    return `This action returns all categorias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }

  verifyCategoriaLengthIdList(categoriasController: CategoriasController) {
    console.log(categoriasController.findAllCategorias);
  }

  // verifyCategoriaCodigo(@Body() codigo: string, categoriasController: CategoriasController) {
  //   const filteredCodigo = categoriasController.findAllCategorias
  // }
}
