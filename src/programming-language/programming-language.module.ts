import { MongooseModule } from "@nestjs/mongoose";
import { ProgrammingLanguageController } from "./programming-language.controller";
import { ProgrammingLanguageService } from "./programming-language.service";
import { ProgrammingLanguage, ProgrammingLanguageSchema } from "src/schemas/programming-language.schema";
import { Module } from "@nestjs/common";

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: ProgrammingLanguage.name, schema: ProgrammingLanguageSchema },
      ]),
    ],
    controllers: [ProgrammingLanguageController],
    providers: [ProgrammingLanguageService],
    exports: [ProgrammingLanguageService],
  })
  export class ProgrammingLanguageModule {}