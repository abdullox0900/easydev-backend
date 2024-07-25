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

  @IsOptional()
  @IsEnum(['oson', 'orta', 'qiyin'])
  readonly level?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly tags?: string[];

  @IsOptional()
  @IsString()
  readonly codeSnippet?: string;

  @IsOptional()
  @IsArray()
  readonly resources?: { title: string; link: string; type: string }[];
}