import { useState } from "react"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { createPlant } from "@/app/_lib/createPlant"
import { CreatePlantSchema } from "@/app/_lib/schemas"
import Map from "./map/Map"
import PrimaryButton from "@/app/_components/buttons/PrimaryButton"
import {
    Form,
    InputContainer,
    Input,
    MapContainer,
    Label,
    ButtonsContainer,
    Button,
    GeneralError,
} from "./Elements"
import { revalidatePath } from "next/cache"
import SecondaryButton from "@/app/_components/buttons/SecondaryButtons"

const CreatePlantForm = ({ setOpenModal }) => {

    const { pending } = useFormStatus()
    const [lat, setLat] = useState(-39.08138204478938)
    const [lng, setLng] = useState(-65.37365285633658)
    const [error, setError] = useState("")

    const handleForm = async (formData) => {

        //CLIENT VALIDATION
        const result = CreatePlantSchema.safeParse({
            name: formData.get("plant_name")
        })

        if(!result.success) {
            setError(result.error.issues[0].message)
            return
        }

        if(error.length > 0) setError("")
        
        //SEND TO SERVER
        const response = await createPlant(formData)

        if(response?.error) {
            setError("No se pudo crear la planta.")
            return
        } 

        setOpenModal(false)
    }

    return (
        <Form noValidate action={handleForm}>
            <InputContainer>
                <Label>Nombre de la planta</Label>
                <Input
                    type="text"
                    name="plant_name"
                    placeholder="ej. Mi planta Solbox"
                    aria-label="Nombre de la planta"
                    aria-required="true"
                />
            </InputContainer>
            <MapContainer>
                <Label>Selecciona la ubicación de tu planta</Label>
                <Map lat={lat} setLat={setLat} lng={lng} setLng={setLng} />
            </MapContainer>
            <input type="hidden" name="plant_lat" value={lat} />
            <input type="hidden" name="plant_lng" value={lng} />
            {
                error.length > 0 ?
                <GeneralError>{error}</GeneralError> : null
            }
            <ButtonsContainer>
                <Button type="submit" aria-disabled={pending}>
                    <PrimaryButton>
                        {
                            pending ? "Loading..." : "Crear"
                        }
                    </PrimaryButton>
                </Button>
                <Button type="button" onClick={() => setOpenModal(false)}>
                    <SecondaryButton>Cancelar</SecondaryButton>
                </Button>
            </ButtonsContainer>
        </Form>
    )
}

export default CreatePlantForm