// portfolio.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio } from '../schemas/portfolio.schema';
import { CreatePortfolioDto } from '../dto/create-portfolio.dto';
import { UpdatePortfolioDto } from '../dto/update-portfolio.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name) private portfolioModel: Model<Portfolio>,
  ) {}

  async create(createPortfolioDto: CreatePortfolioDto, imagePath: string): Promise<Portfolio> {
    const createdPortfolio = new this.portfolioModel({
      ...createPortfolioDto,
      img: imagePath,
    });
    return createdPortfolio.save();
  }

  async findAll(): Promise<Portfolio[]> {
    return this.portfolioModel.find().exec();
  }

  async findOne(id: string): Promise<Portfolio> {
    return this.portfolioModel.findById(id).exec();
  }

  async update(id: string, updatePortfolioDto: UpdatePortfolioDto): Promise<Portfolio> {
    return this.portfolioModel.findByIdAndUpdate(id, updatePortfolioDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Portfolio> {
    return this.portfolioModel.findByIdAndDelete(id).exec();
  }
}