import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SolarEnergyIcon({
  iconName = 'solar-energy',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
