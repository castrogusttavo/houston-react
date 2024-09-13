import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BicycleIcon({ iconName = 'bicycle', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
