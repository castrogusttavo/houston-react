import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeLeftIcon({ iconName = 'stroke-left-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
