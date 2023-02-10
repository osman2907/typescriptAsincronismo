"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryDto = void 0;
const class_validator_1 = require("class-validator");
const category_model_1 = require("../models/category.model");
class CreateCategoryDto {
}
__decorate([
    (0, class_validator_1.isNotEmpty)(),
    (0, class_validator_1.Length)(4, 10)
], CreateCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.isNotEmpty)()
], CreateCategoryDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.isEnum)(category_model_1.AccessType)
], CreateCategoryDto.prototype, "access", void 0);
exports.CreateCategoryDto = CreateCategoryDto;
