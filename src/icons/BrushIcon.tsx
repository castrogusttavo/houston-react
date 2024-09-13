import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BrushIcon({ iconName = 'brush', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
