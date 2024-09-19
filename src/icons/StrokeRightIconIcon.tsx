import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeRightIconIcon({ iconName = 'stroke-right-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
