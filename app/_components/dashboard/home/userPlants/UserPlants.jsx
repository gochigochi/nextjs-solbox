import { useState, useEffect } from 'react'
import { AiOutlinePlusCircle, AiTwotoneDelete } from 'react-icons/ai'
import { AnimatePresence } from 'framer-motion'
import Modal from './modal/Modal'
import CreatePlantForm from '../createPlantForm/CreatePlantForm'
import DeletePlant from '../deletePlant/DeletePlant'
import {
    PlantsContainer,
    PlantBox,
    AddPlantButton,
    PlantName,
    PlantProduction,
    PlusIcon,
    AddText,
    PlantDetails,
    PlantId,
    DeletePlantButton,
    Off,
    ExpandButton,
} from './Elements'

const UserPlants = ({ data }) => {

    const [showAll, setShowAll] = useState(false)
    const [plantsToShow, setPlantsToShow] = useState([...data.slice(0, 2)])
    const [openModal, setOpenModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [toDeleteId, setToDeleteId] = useState(null)

    useEffect(() => {
        if (showAll) setPlantsToShow([...data])
        if (!showAll) setPlantsToShow([...data.slice(0, 2)])
    }, [showAll, data])

    const handleDelete = async (id) => {
        setToDeleteId(id)
        setDeleteModal(true)
    }

    return (
        <PlantsContainer>
            {
                plantsToShow.map(plant => {
                    return (
                        <PlantBox key={plant.id}>
                            <PlantDetails>
                                <PlantName>{plant.name}</PlantName>
                                <PlantId>id. {plant.id}</PlantId>
                            </PlantDetails>
                            <PlantProduction>
                                {plant.generationPower ? plant.generationPower : null}
                                {
                                    plant.generationPower ?
                                        <span>kWh</span> :
                                        <Off>offline</Off>
                                }
                            </PlantProduction>
                            <DeletePlantButton onClick={() => handleDelete(plant.id)}>
                                <AiTwotoneDelete />
                            </DeletePlantButton>
                        </PlantBox>
                    )
                })
            }
            {
                plantsToShow.length !== 0 ?
                <ExpandButton onClick={() => setShowAll(!showAll)}>{showAll ? "Plegar" : "Ver todas las plantas"}</ExpandButton> :
                null
            }
            <AddPlantButton onClick={() => setOpenModal(true)}>
                <PlusIcon><AiOutlinePlusCircle /></PlusIcon>
                <AddText>Agregar nueva planta</AddText>
            </AddPlantButton>
            <AnimatePresence>
                {
                    openModal ?
                        <Modal setOpenModal={setOpenModal}>
                            <CreatePlantForm setOpenModal={setOpenModal} />
                        </Modal> : null
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    deleteModal ?
                        <Modal setOpenModal={setDeleteModal}>
                            <DeletePlant setOpenModal={setDeleteModal} toDeleteId={toDeleteId} />
                        </Modal> : null
                }
            </AnimatePresence>
        </PlantsContainer>
    )
}

export default UserPlants