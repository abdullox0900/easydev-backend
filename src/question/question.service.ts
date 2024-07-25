import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from '../schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ProgrammingLanguageService } from '../programming-language/programming-language.service';

@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name) private questionModel: Model<Question>,
        private programmingLanguageService: ProgrammingLanguageService,
    ) { }

    async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
        const language = await this.programmingLanguageService.findOne(createQuestionDto.programmingLanguage);
        if (!language) {
            throw new NotFoundException(`Programming language with ID "${createQuestionDto.programmingLanguage}" not found`);
        }
        const createdQuestion = new this.questionModel(createQuestionDto);
        return createdQuestion.save();
    }

    async findAll(title: string, description: string, language?: string, level?: string): Promise<Question[]> {
        let query = {};
        if (language) {
            query['programmingLanguage'] = language;
        } else if (level) {
            query['level'] = level;
        } else if (title) {
            query[title] = title
        } else if (description) {
            query[description] = description
        }
        return this.questionModel.find(query).populate('programmingLanguage').exec();
    }

    async findOne(id: string): Promise<Question> {
        const question = await this.questionModel.findById(id).populate('programmingLanguage').exec();
        if (!question) {
            throw new NotFoundException(`Question with ID "${id}" not found`);
        }
        return question;
    }

    async update(id: string, updateQuestionDto: UpdateQuestionDto): Promise<Question> {
        if (updateQuestionDto.programmingLanguage) {
            const language = await this.programmingLanguageService.findOne(updateQuestionDto.programmingLanguage);
            if (!language) {
                throw new NotFoundException(`Programming language with ID "${updateQuestionDto.programmingLanguage}" not found`);
            }
        }
        const updatedQuestion = await this.questionModel
            .findByIdAndUpdate(id, updateQuestionDto, { new: true })
            .exec();
        if (!updatedQuestion) {
            throw new NotFoundException(`Question with ID "${id}" not found`);
        }
        return updatedQuestion;
    }

    async remove(id: string): Promise<Question> {
        const deletedQuestion = await this.questionModel.findByIdAndDelete(id).exec();
        if (!deletedQuestion) {
            throw new NotFoundException(`Question with ID "${id}" not found`);
        }
        return deletedQuestion;
    }
}