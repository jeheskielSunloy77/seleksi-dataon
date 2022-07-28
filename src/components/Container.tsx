import React, { ReactNode } from 'react'

interface WithClassComponent {
  className?: string
  children?: ReactNode
}
export default function Container({ className, children }: WithClassComponent) {
  return <div className={className + ' container mx-auto px-6 py-14'}>{children}</div>
}
