import { AxiosError } from "axios";
import { ErrorMensaje } from "../models/error.model";

export const mensajeError = (error: unknown) => {
  const err = error as AxiosError;
  const resp: Partial<ErrorMensaje> = {};
  const respData: any = err.response?.data;
  resp.code = err.response?.status;
  if (err.response?.status === 404) {
    resp.message = "Ruta no encontrada";
  }
  if (err.response?.status === 400) {
    resp.message =
      respData.name === "EntityNotFoundError"
        ? "Registro no encontrado verifique en el getAll su existencia"
        : "Ruta mal creada";
  }
  if (err.response?.status === 500) {
    resp.message = "Error en el Servidor, intente nuevamente más tarde"
  }
  resp.response = (err.response?.data as any).message;
  console.table(resp);
};
