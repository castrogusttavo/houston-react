import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoneyReceive01Icon({
  iconName = 'money-receive-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
