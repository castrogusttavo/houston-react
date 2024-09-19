import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeBottomIcon({ iconName = 'stroke-bottom-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
