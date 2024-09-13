import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BatteriesEnergyIcon({
  iconName = 'batteries-energy',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
