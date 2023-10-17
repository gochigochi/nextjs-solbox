export const parseUserChartsData = (totalIndividualProduction) => {
    return [
        {
            description: "gas natural",
            unit: "m3",
            amount: totalIndividualProduction / 10.7056,
            icon: "",
            color: "var(--dark-blue)",
            isFloating: true,
        },
        {
            description: "gas envasados",
            unit: "m3",
            amount: totalIndividualProduction / 12.4389,
            icon: "",
            color: "var(--dark-blue)",
            isFloating: true,
        },
        {
            description: "Co2 emitidos",
            unit: "kg",
            amount: totalIndividualProduction * .2016,
            icon: "",
            color: "var(--strong-green)",
            isFloating: true,
        },
        {
            description: "nafta consumidos",
            unit: "ltrs",
            amount: totalIndividualProduction * .30062630480167,
            icon: "",
        },
        {
            description: "de celular",
            unit: "cargas",
            amount: totalIndividualProduction * 90.07,
            icon: "",
        },
        {
            description: "plantados crecidos durante 10 años",
            unit: "Árboles",
            amount: totalIndividualProduction * .01169,
            icon: "",
            color: "var(--green)"
        },
        {
            description: "eléctricos en un año",
            unit: "kWh",
            amount: totalIndividualProduction * 4 * 360,
            icon: "",
        },
        {
            description: "recorridos por un vehículo familiar",
            unit: "Kms",
            amount: totalIndividualProduction * 10,
            icon: "",
        },
    ]
}