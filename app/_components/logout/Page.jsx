"use client"

import Link from "next/link"
import PrimaryButton from "../buttons/PrimaryButton"
import SecondaryButton from "../buttons/SecondaryButtons"
import { Dialogue } from "./Elements"

const Page = () => {
  return (
    <Dialogue>
        <Link href="/login">
            <SecondaryButton>Ingresar</SecondaryButton>
        </Link>
        <Link href="/home">
            <PrimaryButton>Ir al escritorio</PrimaryButton>
        </Link>
    </Dialogue>
  )
}

export default Page