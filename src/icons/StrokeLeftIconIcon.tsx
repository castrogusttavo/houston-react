import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeLeftIconIcon({ iconName = 'stroke-left-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
