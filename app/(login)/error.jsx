'use client'
 
import ErrorComponent from '../_components/error/ErrorComponent'
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return <ErrorComponent reset={reset}>Ocurrió un error en la conexión con los datos de Solbox</ErrorComponent>
}