import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoneyBag01Icon({
  iconName = 'money-bag-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
