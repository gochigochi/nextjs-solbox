import { Hamb, Span } from './Elements'

const MenuIcon = ({ open, setOpen }) => {
  return (
    <Hamb onClick={() => setOpen(!open)}>
        <Span isOpen={open} />
        <Span isOpen={open} />
        <Span isOpen={open} />
    </Hamb>
  )
}

export default MenuIcon