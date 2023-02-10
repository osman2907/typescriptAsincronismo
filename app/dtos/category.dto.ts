import { IsNotEmpty, Length, IsEnum, IsOptional, IsUrl } from "class-validator";
import { AccessType, Category } from "../models/category.model";

interface ICreateCategoryDto extends Omit<Category, "id"> {}
interface IUpdateCategoryDto extends Partial<ICreateCategoryDto> {}
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

export class UpdateCategoryDto implements ICreateCategoryDto {
  @Length(4, 10)
  @IsOptional()
  name!: string;

  @IsUrl()
  @IsOptional()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}


