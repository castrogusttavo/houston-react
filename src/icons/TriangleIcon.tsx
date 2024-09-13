import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TriangleIcon({ iconName = 'triangle', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
