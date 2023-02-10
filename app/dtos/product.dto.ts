import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

interface ICreateProductDto extends Omit<Product, "id" | "category"> {
  categoryId: Category["id"];
}

interface IUpdateProductDto extends Partial<ICreateProductDto> {}

export class CreateProductDto implements ICreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  categoryId!: number;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsArray()
  @IsString({ each: true })
  images!: string[];
}

export class UpdateProductDto implements IUpdateProductDto {
  @IsNumber()
  @IsOptional()
  categoryId!: number;

  @IsString()
  @IsOptional()
  title!: string;

  @IsNumber()
  @IsOptional()
  price!: number;

  @IsString()
  @IsOptional()
  description!: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images!: string[];
}
