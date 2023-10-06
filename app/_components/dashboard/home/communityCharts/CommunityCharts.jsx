"use client"

import dynamic from "next/dynamic"
import { GraphContainer, GraphContainerSubdivision } from "./Elements"

const DynGasChart = dynamic(() => import("./GasChart/GasChart"), { ssr: false })
const DynCoChart = dynamic(() => import("./CoChart/CoChart"), { ssr: false })
const DynTreeChart = dynamic(() => import("./TreeChart/TreeChart"), { ssr: false })
const DynOilChart = dynamic(() => import("./OilChart/OilChart"), { ssr: false })
const DynKmChart = dynamic(() => import("./KmChart/KmChart"), { ssr: false })
const DynPhonesChart = dynamic(() => import("./PhonesChart/PhonesChart"), { ssr: false })
const DynKwhChart = dynamic(() => import("./KwhChart/KwhChart"), { ssr: false })

const CommunityCharts = ({ plantsTotalEnergy }) => {

    return (
        <GraphContainer>
            <DynGasChart total={plantsTotalEnergy} />
            <GraphContainerSubdivision>
                <DynCoChart total={plantsTotalEnergy} />
                <DynTreeChart total={plantsTotalEnergy} />
            </GraphContainerSubdivision>
            <GraphContainerSubdivision>
                <DynOilChart total={plantsTotalEnergy} />
                <DynKmChart total={plantsTotalEnergy} />
            </GraphContainerSubdivision>
            <GraphContainerSubdivision>
                <DynPhonesChart total={plantsTotalEnergy} />
                <DynKwhChart total={plantsTotalEnergy} />
            </GraphContainerSubdivision>
        </GraphContainer>
    )
}

export default CommunityCharts