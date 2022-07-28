import { ReactNode } from 'react'
import Container from './Container'

interface WithClassComponent {
  className?: string
  children?: ReactNode
}
export default function Card({ children, className }: WithClassComponent) {
  return <Container className={className + ' bg-gray-200   p-4 rounded-xl'}>{children}</Container>
}
