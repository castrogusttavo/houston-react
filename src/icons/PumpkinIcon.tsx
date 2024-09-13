import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PumpkinIcon({ iconName = 'pumpkin', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
