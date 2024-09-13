import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EnergyEllipseIcon({
  iconName = 'energy-ellipse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
