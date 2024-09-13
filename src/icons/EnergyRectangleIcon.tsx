import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EnergyRectangleIcon({
  iconName = 'energy-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
