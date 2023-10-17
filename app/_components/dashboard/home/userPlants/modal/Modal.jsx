import { useEffect } from 'react'
import {
  Container,
  Inner,
} from "./Elements"
import {
  softFadeIn,
  modalVariants
} from "./Motion"

const Modal = ({ children, setOpenModal }) => {

  useEffect(() => {

    const handleClick = (e) => e.target.id === "container" && setOpenModal(false)

    window.addEventListener("click", handleClick)

    return () => window.removeEventListener("click", handleClick)

  }, [])

  return (
    <Container
      id="container"
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Inner variants={softFadeIn}>
        {children}
      </Inner>
    </Container>
  )
}

export default Modal