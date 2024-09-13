import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TowTruckIcon({ iconName = 'tow-truck', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
