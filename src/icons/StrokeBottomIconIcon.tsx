import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeBottomIconIcon({ iconName = 'stroke-bottom-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
