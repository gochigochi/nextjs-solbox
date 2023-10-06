"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { GraphBox, GraphTitle } from "../Elements"

const GasChart = ({ total }) => {

    const data = [
        {
            name: "Natural",
            amount: (total / 10.7056).toFixed(2),
        },
        {
            name: "Envasado",
            amount: (total / 12.4389).toFixed(2),
        }
    ]

    return (
        <GraphBox>
            <GraphTitle>m3 de gas</GraphTitle>
            <BarChart
                width={325}
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
                <YAxis unit=" m3" />
                <Tooltip />
                <Bar dataKey="amount" fill="var(--yellow)" />
            </BarChart>
        </GraphBox>
    )
}

export default GasChart