import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShapesIcon({ iconName = 'shapes', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
