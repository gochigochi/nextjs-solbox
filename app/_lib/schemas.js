import { z } from "zod"

export const LoginSchema = z.object({
    email: z.string().min(3, { message: "Ingrese un correo" }).email({ message: "Ingrese un correo adecuado" }),
    password: z.string().min(6, { message: "Ingrese contraseña (6 caracteres)" }),
})

export const CreatePlantSchema = z.object({
    name: z.string().min(1, { message: "Ingrese un nombre"}),
})