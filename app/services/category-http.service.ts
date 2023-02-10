import axios from "axios"
import { UpdateCategoryDto, CreateCategoryDto } from "../dtos/category.dto"
import { CategoryService } from "../models/category-service.model"
import { Category } from "../models/category.model"
import { Product } from "../models/product.model"

export class CategoryHttpService implements CategoryService {
    private url = "https://api.escuelajs.co/api/v1/categories"
    async getAll(): Promise<Category[]> {
        const { data } = await axios.get<Category[]>(this.url)
        return data
    }
    async update(id: number, changes: UpdateCategoryDto): Promise<Category> {
        const {data} = await axios.put(`${this.url}/${id}`, changes)
        return data
    }
    async create(dto: CreateCategoryDto): Promise<Category> {
        const {data} = await axios.post(this.url, dto)
        return data
    }
    async findOne(id: number): Promise<Category | undefined> {
        const {data} = await axios.get(`${this.url}/${id}`)
        return data
    }
    
}
