import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GarageIcon({ iconName = 'garage', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
