import { Product } from "./models/product.model";
import { CreateProductDto, UpdateProductDto } from "./dtos/product.dto";
import { ProductHttpService } from "./services/product-http.service";
import axios from "axios";

(async () => {
  const productService = new ProductHttpService();

  /******************************Listar Productos******************************/
  console.log("--".repeat(10));
  console.log("GetAll");
  try {
    // const products:Product[] | undefined = await productService.getAll()
    // console.log(products.length)
    // console.log(products.map(item => item.id))
    // console.log(products)
  } catch (error) {
    console.log("Error consultando productos (getAll)");
  }
  /****************************** Fin Listar Productos******************************/

  /****************************** Buscar Producto******************************/
  console.log("--".repeat(10));
  console.log("FindOne");
  try {
    // const idBuscar: number = 302;
    // const encontrado:Product | undefined = await productService.findOne(idBuscar)
    // console.log(encontrado)
  } catch (error) {
    console.log("Error consultando producto (findOne)");
  }
  /****************************** Fin Buscar Producto******************************/

  /******************************Crear Productos******************************/
  console.log("--".repeat(10));
  console.log("Create");
  // const crear: CreateProductDto = {
  //   categoryId: 2,
  //   description: 'Smart TV Daewoo',
  //   images: ["https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80"],
  //   price: 200,
  //   title: 'Televison Inteligente'
  // }
  // const creado = await productService.create(crear)
  // console.log(creado)
  /******************************Fin Crear Productos******************************/

  /******************************Modificar Productos******************************/
  console.log("--".repeat(10));
  console.log("Update");
  try {
    // const idModificar: number = 302;
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
    console.log("Error modificando producto");
  }
  /******************************Fin Modificar Productos******************************/
})();
