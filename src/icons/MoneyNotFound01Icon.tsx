import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoneyNotFound01Icon({
  iconName = 'money-not-found-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
