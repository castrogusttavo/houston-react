import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeRightIcon({ iconName = 'stroke-right-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
