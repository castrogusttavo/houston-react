import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RadiusIcon({ iconName = 'radius', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
