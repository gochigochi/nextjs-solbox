"use client"

import PrimaryButton from "../buttons/PrimaryButton"
import {
    ErrorContainer,
    ErrorInner,
    ErrorMsj,
    ResetButton,
} from "./Elements"

const ErrorComponent = (props) => {
  return (
    <ErrorContainer>
        {/* <ErrorInner> */}
            <ErrorMsj>{props.children}</ErrorMsj>
            <ResetButton onClick={props.reset}>
                <PrimaryButton>Reintentar</PrimaryButton>
            </ResetButton>
        {/* </ErrorInner> */}
    </ErrorContainer>
  )
}

export default ErrorComponent