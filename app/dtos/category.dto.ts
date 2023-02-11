import { IsNotEmpty, Length, IsEnum, IsOptional, IsUrl } from "class-validator";
import { AccessType, Category } from "../models/category.model";

interface ICreateCategoryDto extends Omit<Category, "id"> {}
export interface UpdateCategoryDto extends Partial<Category> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @Length(4, 10)
  @IsNotEmpty()
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}


