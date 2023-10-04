"use client"

// import { GraphContainer, GraphContainerSubdivision } from "./Elements"
// import GasChart from "./GasChart/GasChart"
// import CoChart from "./CoChart/CoChart"
// import TreeChart from "./TreeChart/TreeChart"
// import OilChart from "./OilChart/OilChart"
// import KmChart from "./KmChart/KmChart"
// import PhonesChart from "./PhonesChart/PhonesChart"
// import KwhChart from "./KwhChart/KwhChart"

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