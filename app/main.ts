import { Product } from "./models/product.model";
import { Category } from "./models/category.model";
import { CreateProductDto, UpdateProductDto } from "./dtos/product.dto";
import { ProductHttpService } from "./services/product-http.service";
import { CategoryHttpService } from "./services/category-http.service";
import { mensajeError } from "./utils/errors";
import { CreateCategoryDto, UpdateCategoryDto } from "./dtos/category.dto";

(async () => {
  const productService = new ProductHttpService();
  const CategoryService = new CategoryHttpService();

  /******************************Listar Productos******************************/
  console.log("--".repeat(10));
  console.log("GetAll Products");
  try {
    // const products:Product[] | undefined = await productService.getAll()
    // console.log(products.length)
    // console.log(products.map(item => item.id))
    // console.log(products)
  } catch (error) {
    mensajeError(error);
  }
  /****************************** Fin Listar Productos******************************/


  /****************************** Buscar Producto******************************/
  console.log("--".repeat(10));
  console.log("FindOne Products");
  try {
    // const idBuscar: number = 215;
    // const encontrado:Product | undefined = await productService.findOne(idBuscar)
    // console.log(encontrado)
  } catch (error) {
    mensajeError(error);
  }
  /****************************** Fin Buscar Producto******************************/


  /******************************Crear Productos******************************/
  console.log("--".repeat(10));
  console.log("Create Products");
  try {
    // const crear: CreateProductDto = {
    //   categoryId: 2,
    //   description: 'Smart TV Daewoo',
    //   images: ["https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80"],
    //   price: 200,
    //   title: 'Televison Inteligente'
    // }
    // const creado = await productService.create(crear)
    // console.log(creado)
  } catch (error) {
    mensajeError(error);
  }
  /******************************Fin Crear Productos******************************/


  /******************************Modificar Productos******************************/
  console.log("--".repeat(10));
  console.log("Update Products");
  try {
    // const idModificar: number = 215;
    // const modificar: UpdateProductDto = {
    //   price: 220,
    //   description: "Smart TV Daewoo 42",
    // };
    // const modificado: Product | undefined = await productService.update(
    //   idModificar,
    //   modificar
    // );
    // console.log(modificado)
  } catch (error) {
    mensajeError(error);
  }
  /******************************Fin Modificar Productos******************************/


  /******************************Listar Categorías******************************/
  console.log("--".repeat(10));
  console.log("GetAll Categories");
  try {
    // const categories:Category[] | undefined = await CategoryService.getAll()
    // console.log(categories.length)
    // console.log(categories.map(item => item.id))
    // console.log(categories)
  } catch (error) {
    mensajeError(error);
  }
  /****************************** Fin Listar Productos******************************/


  /****************************** Buscar Categoría******************************/
  console.log("--".repeat(10));
  console.log("FindOne Categories");
  try {
    // const idBuscar: number = 8
    // const encontrado:Category | undefined = await CategoryService.findOne(idBuscar)
    // console.log(encontrado)
  } catch (error) {
    mensajeError(error);
  }
  /****************************** Fin Buscar Categoría******************************/


  /******************************Crear Productos******************************/
  console.log("--".repeat(10));
  console.log("Create Categories");
  try {
    // const crear: CreateCategoryDto = {
    //   name: "Alimentos",
    //   image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    // }
    // const creado = await CategoryService.create(crear)
    // console.log(creado)
  } catch (error) {
    mensajeError(error);
  }
  /******************************Fin Crear Productos******************************/


  /******************************Modificar Productos******************************/
  console.log("--".repeat(10));
  console.log("Update Categories");
  try {
    // const idModificar: number = 8
    // const modificar: UpdateCategoryDto = {
    //   name: "Productos Alimenticios"
    // };
    // const modificado: Category | undefined = await CategoryService.update(
    //   idModificar,
    //   modificar
    // );
    // console.log(modificado)
  } catch (error) {
    mensajeError(error);
  }
  /******************************Fin Modificar Productos******************************/
})();
