import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FuelIcon({ iconName = 'fuel', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
