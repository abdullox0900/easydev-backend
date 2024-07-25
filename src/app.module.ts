import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ProgrammingLanguageModule } from './programming-language/programming-language.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/portfolio_db'),
    PortfolioModule,
    ProgrammingLanguageModule,
    QuestionModule,
  ],
})
export class AppModule {}