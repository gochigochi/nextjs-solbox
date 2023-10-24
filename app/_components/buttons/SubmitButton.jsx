"use client"

import { experimental_useFormStatus as useFormStatus } from "react-dom"
import PrimaryButton from "./PrimaryButton"
import { Ring } from '@uiball/loaders'

const SubmitButton = (props) => {

    const { pending } = useFormStatus()

    return (
        <button type="submit">
            <PrimaryButton disabled={pending} aria-disabled={pending}>
                {
                    pending ?
                        <Ring
                            size={20}
                            lineWeight={5}
                            speed={2}
                            color="var(--blue)"
                        />: 
                        <>
                            {props.children}
                        </>
                }
            </PrimaryButton>
        </button>
    )
}

export default SubmitButton