import { useState } from "react"
import { Container, Top, Bottom, Button, Msg } from "./Elements"
import PrimaryButton from "@/app/_components/buttons/PrimaryButton"
import SecondaryButton from "@/app/_components/buttons/SecondaryButtons"
import { deletePlant } from "@/app/_lib/deletePlant"
import SubmitButton from "@/app/_components/buttons/SubmitButton"

const DeletePlant = ({ setOpenModal, toDeleteId }) => {

    const [msg, setMsg] = useState("¿Seguro que desea eliminar esta planta?")

    const handleDelete = async () => {

        const result = await deletePlant(toDeleteId)

        if(result?.error) {
            console.log("Client error on delete plant")
            setMsg("Ocurrió un error. Vuelva a intentarlo")
            setTimeout(() => setOpenModal(false), 3500)
            return
        }

        setMsg("La planta fue borrada exitosamente.")
        setTimeout(() => setOpenModal(false), 3500)
    }

    return (
        <Container>
            <Top>{msg}</Top>
            <Bottom>
                <Button onClick={() => setOpenModal(false)}>
                    <SecondaryButton>Cancelar</SecondaryButton>
                </Button>
                <form action={handleDelete}>
                    <SubmitButton>Eliminar</SubmitButton>
                    {/* <Button formAction={handleDelete}>
                        <PrimaryButton disabled={isPending}>Eliminar</PrimaryButton>
                    </Button> */}
                </form>
            </Bottom>
        </Container>
    )
}

export default DeletePlant