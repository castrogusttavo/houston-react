import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EnergyIcon({ iconName = 'energy', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
