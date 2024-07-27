import { IsNotEmpty, IsString, IsMongoId, IsOptional, IsArray, IsEnum } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly answer: string;

  @IsNotEmpty()
  @IsMongoId()
  readonly programmingLanguage: string;

  @IsNotEmpty()
  @IsString()
  readonly language: string;

  @IsOptional()
  // @IsEnum(['oson', 'orta', 'qiyin'])
  readonly level?: string;

  @IsOptional()
  @IsArray()
  // @IsString({ each: true })
  readonly tags?: string[];

  @IsOptional()
  @IsString()
  readonly codeSnippet?: string;

  @IsOptional()
  @IsArray()
  readonly resources?: { title: string; link: string }[];

  @IsOptional()
  @IsArray()
  readonly youtube?: { title: string; link: string }[];
}