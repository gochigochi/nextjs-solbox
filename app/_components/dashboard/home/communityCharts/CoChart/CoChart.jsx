"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { GraphBox, GraphTitle } from "../Elements"

const CoChart = ({ total }) => {

    const data = [
        {
            name: "CO2",
            amount: (total * .2016).toFixed(2),
        },
    ]

    return (
        <GraphBox>
            <GraphTitle>Kg de CO2 emitidos</GraphTitle>
            <BarChart
                width={200}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                }}
                barSize={50}
                className='chart-text'
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit=" kg" />
                <Tooltip />
                <Bar dataKey="amount" fill="var(--middle-blue)" />
            </BarChart>
        </GraphBox>
    )
}

export default CoChart