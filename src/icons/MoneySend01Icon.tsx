import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoneySend01Icon({
  iconName = 'money-send-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
