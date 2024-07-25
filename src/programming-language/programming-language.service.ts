// programming-language.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProgrammingLanguage } from '../schemas/programming-language.schema';
import { CreateProgrammingLanguageDto } from './dto/create-programming-language.dto';

@Injectable()
export class ProgrammingLanguageService {
    constructor(
        @InjectModel(ProgrammingLanguage.name)
        private programmingLanguageModel: Model<ProgrammingLanguage>,
    ) {}

    async create(createProgrammingLanguageDto: CreateProgrammingLanguageDto): Promise<ProgrammingLanguage> {
        const createdProgrammingLanguage = new this.programmingLanguageModel(createProgrammingLanguageDto);
        return createdProgrammingLanguage.save();
    }

    async findAll(): Promise<ProgrammingLanguage[]> {
        return this.programmingLanguageModel.find().exec();
    }

    async findOne(id: string): Promise<ProgrammingLanguage> {
        return this.programmingLanguageModel.findById(id).exec();
    }

    async remove(id: string): Promise<ProgrammingLanguage> {
        return this.programmingLanguageModel.findByIdAndDelete(id).exec();
    }
}