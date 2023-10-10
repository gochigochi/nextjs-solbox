"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { GraphBox, GraphTitle } from "../Elements"

const TreeChart = ({ total }) => {

    const data = [
        {
            name: "Árboles",
            amount: (total * .01169).toFixed(2),
        },
    ]

    return (
        <GraphBox>
            <GraphTitle>Árboles plantados</GraphTitle>
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
                <Bar dataKey="amount" fill="var(--green)" />
            </BarChart>
        </GraphBox>
    )
}

export default TreeChart