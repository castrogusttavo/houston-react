import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TruckIcon({ iconName = 'truck', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
