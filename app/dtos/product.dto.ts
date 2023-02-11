import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

interface ICreateProductDto extends Omit<Product, "id" | "category"> {
  categoryId: Category["id"];
}

export interface UpdateProductDto extends Partial<Product> {}

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
