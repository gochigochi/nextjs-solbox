export const getFirebaseErrorMsg = async (code) => {
    "use server"

    switch (code) {
        case "auth/email-already-in-use":
            return "Este usuario ya está registrado."
        case "auth/wrong-password":
            return "La contraseña es incorrecta."
        case "auth/user-not-found":
            return "Este usuario no existe."
        case "auth/weak-password":
            return "La contraseña debe tener al menos 6 caracteres."
        case "auth/too-many-requests":
            return "Demasiados intentos. Pruebe en unos minutos."
        default:
            return "Ocurrió un error. Intentelo nuevamente."
    }
}