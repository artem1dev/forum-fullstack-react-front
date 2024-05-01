import { TFunction } from 'i18next'
import React from 'react'
interface IProps {
  t:  TFunction<"translation", undefined>
  children?: string
}
export const Header = ({t}: IProps) => {
  return (
    <div>{t('')}</div>
  )
}
