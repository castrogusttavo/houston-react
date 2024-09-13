import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RenewableEnergyIcon({
  iconName = 'renewable-energy',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
