import { CreateCategoryDto, UpdateCategoryDto } from "../dtos/category.dto";
import { Category } from "./category.model";
import { Product } from "./product.model";

export interface CategoryService {
  getAll(): Category[] | Promise<Category[]>;
  update(
    id: Category["id"],
    changes: UpdateCategoryDto
  ): Category | Promise<Category>;
  create(dto: CreateCategoryDto): Category | Promise<Category>;
  findOne(
    id: Category["id"]
  ): Category | undefined | Promise<Category | undefined>;
}
