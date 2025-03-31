import { PropsWithChildren, ReactNode } from "react"

type Props = {
  modal : ReactNode
} & PropsWithChildren

export default function Layout({children, modal} : Props) {
  return (
    <div>
      {children}
      {modal}
    </div>
  )
}