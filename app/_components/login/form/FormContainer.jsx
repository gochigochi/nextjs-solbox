import dynamic from "next/dynamic"
import { LoginSchema } from "@/app/_lib/schemas"

const DynForm = dynamic(() => import("./Form"), { ssr: false})

const FormContainer = () => {

    // VER SI PUEDO PASAR TODA ESTA LOGICA A LA PAGINA DE LOGIN

    //         switch (fase.errorMsg.code) {
    //             case "auth/email-already-in-use":
    //                 setGeneralError("Este usuario ya está registrado.")
    //                 break
    //             case "auth/wrong-password":
    //                 setGeneralError("La contraseña es incorrecta.")
    //                 break
    //             case "auth/user-not-found":
    //                 setGeneralError("Este usuario no existe.")
    //                 break
    //             case "auth/weak-password":
    //                 setGeneralError("La contraseña debe tener al menos 6 caracteres.")
    //                 break
    //             case "auth/too-many-requests":
    //                 setGeneralError("Demasiados intentos. Pruebe en unos minutos.")
    //                 break
    //             default:
    //                 setGeneralError("Ocurrió un error. Intentelo nuevamente.")


    async function login(data) {
        "use server"
        console.log("server", data)

        if(data?.email === undefined || data?.password === undefined) {
            return { error: "No hay datos"}
        }

        //Server validation
        const result = LoginSchema.safeParse({
            email: data.email,
            password: data.password,
        })

        if (!result.success) {

            return { error: result.error.issues[0].message }

        } else {

            // FIREBASE

            // REDIRECT

        }
    }

    async function register(data) {
        "use server"
        console.log("server", data)
    }

    async function forgotPsw(data) {
        "use server"
        console.log("server", data)
    }

    return (
        <DynForm
            login={login}
            register={register}
            forgotPsw={forgotPsw}
        />
    )
}

export default FormContainer