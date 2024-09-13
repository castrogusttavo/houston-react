import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WaterEnergyIcon({
  iconName = 'water-energy',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
