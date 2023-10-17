import { Container, Top, Bottom, Button, Msg } from "./Elements"
import PrimaryButton from "@/app/_components/buttons/PrimaryButton"
import SecondaryButton from "@/app/_components/buttons/SecondaryButtons"
import { deletePlant } from "@/app/_lib/deletePlant"

const DeletePlant = ({ setOpenModal, toDeleteId }) => {

    const handleDelete = async () => {

        const result = await deletePlant(toDeleteId)

        if(result?.error) {
            console.log("Client error on delete plant")
            return
        }

        setOpenModal(false)
    }

    return (
        <Container>
            <Top>¿Seguro que desea eliminar esta planta?</Top>
            <Bottom>
                <Button onClick={() => setOpenModal(false)}>
                    <SecondaryButton>Cancelar</SecondaryButton>
                </Button>
                <form>
                    <Button formAction={handleDelete}>
                        <PrimaryButton>Eliminar</PrimaryButton>
                    </Button>
                </form>
            </Bottom>
        </Container>
    )
}

export default DeletePlant