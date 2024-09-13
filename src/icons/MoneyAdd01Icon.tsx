import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoneyAdd01Icon({
  iconName = 'money-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
