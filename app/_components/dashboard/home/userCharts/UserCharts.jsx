import { parseUserChartsData } from '@/app/_lib/parseUserChartsData'
import { 
    ResultsContainer,
    ResultBox,
    Description,
    Result,
    Unit,
} from './Elements'

const UserCharts = ({ totalIndividualProduction }) => {

    const parsedData = parseUserChartsData(totalIndividualProduction)

    return (
        <ResultsContainer>
            {
                parsedData.map(item => {
                    return(
                        <ResultBox key={item.description}>
                            <Result color={item.color}>
                                {
                                    item.isFloating ? 
                                    item.amount.toFixed(2) : 
                                    item.amount.toFixed(0)
                                }
                                {
                                    item.unit ? <Unit>{item.unit}</Unit> : null
                                }
                            </Result>
                            <Description>{item.description}</Description>
                        </ResultBox>
                    )
                })
            }
        </ResultsContainer>
    )
}

export default UserCharts