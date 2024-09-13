import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SustainableEnergyIcon({
  iconName = 'sustainable-energy',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
