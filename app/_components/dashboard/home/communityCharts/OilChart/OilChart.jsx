"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { GraphBox, GraphTitle } from "../Elements"

const OilChart = ({ total }) => {

    const data = [
        {
            name: "Litros de nafta",
            amount: (total * .30062630480167).toFixed(2),
        },
    ]

    return (
        <GraphBox>
            <GraphTitle>Litros de nafta consumidos</GraphTitle>
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
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="var(--dark-gray)" />
            </BarChart>
        </GraphBox>
    )
}

export default OilChart