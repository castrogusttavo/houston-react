import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EcoEnergyIcon({
  iconName = 'eco-energy',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
