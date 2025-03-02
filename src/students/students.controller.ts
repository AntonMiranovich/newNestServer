import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudService } from './students.service';
import { BodyDto, IdDto } from './dto/students.dto';


interface iStud {
  id: number,
  name: string,
  age: number,
  grade: string
}

@Controller('/students')
export class StudController {
  constructor(private readonly appService: StudService) { }

  @Get()
  getAll(): iStud[] | string {
    try {
      return this.appService.getAll();
    } catch (error) {
      return error.message
    }
  }
  @Post()
  createItem(@Body() obj: BodyDto): iStud[] | string {
    try {
      return this.appService.createItem(obj);
    } catch (error) {
      return error.message
    }
  }
  @Put('/:id')
  updateItem(@Body() obj: BodyDto, @Param('id') id: IdDto): iStud[] | string {
    try {
      return this.appService.updateItem(obj, id);
    } catch (error) {
      return error.message
    }
  }
  @Delete('/:id')
  deleteItem(@Param('id') id: IdDto): iStud[] | string {
    try {
      return this.appService.deleteItem(id);
    } catch (error) {
      return error.message
    }
  }

}
