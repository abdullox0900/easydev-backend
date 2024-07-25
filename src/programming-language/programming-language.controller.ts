import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProgrammingLanguageService } from './programming-language.service';
import { CreateProgrammingLanguageDto } from './dto/create-programming-language.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Programming Language')
@Controller('programming-languages')
export class ProgrammingLanguageController {
  constructor(private readonly programmingLanguageService: ProgrammingLanguageService) {}

  @Post()
  create(@Body() createProgrammingLanguageDto: CreateProgrammingLanguageDto) {
    return this.programmingLanguageService.create(createProgrammingLanguageDto);
  }

  @Get()
  findAll() {
    return this.programmingLanguageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programmingLanguageService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programmingLanguageService.remove(id);
  }
}
