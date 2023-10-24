import styled from 'styled-components'

export const PlantsContainer = styled.div`
    display: grid;
    gap: 1rem;
`

export const PlantBox = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: var(--alt-shadow);
    height: 6rem;
    display: grid;
    grid-template-columns: 4fr 1fr 4rem;
    align-items: center;
    padding: 0 1rem;
`

export const PlantDetails = styled.div``

export const PlantName = styled.h3`
    font-size: 1.3rem;

    @media all and (max-width: 450px) {
        font-size: 1rem;
    }
`

export const PlantId = styled.p`
    font-size: .7rem;
    color: var(--dark-gray);
`

export const PlantProduction = styled.div`
    color: var(--blue);
    font-size: 2.5rem;

    span {
        font-size: .8rem;
    }
`

export const Off = styled.p`
    font-size: .7rem;
    text-align: center;
    color: var(--dark-gray);
`

export const DeletePlantButton = styled.button`
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    color: var(--dark-gray);
    opacity: .6;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        opacity: .9;
    }
`

export const ExpandButton = styled.button`
    margin: 1rem 0%;

    @media all and (max-width: 450px) {
        font-size: .9rem;
    }
`

export const AddPlantButton = styled.button`
    background-color: var(--soft-blue);
    border-radius: 12px;
    box-shadow: var(--alt-shadow);
    height: 6rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 1.2rem;
    /* text-align: left; */
`


export const PlusIcon = styled.i`
    font-size: 1.2rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
`

export const AddText = styled.p`
    @media all and (max-width: 450px) {
        font-size: .9rem;
    }
`