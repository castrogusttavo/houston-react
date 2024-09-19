import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeTopIconIcon({ iconName = 'stroke-top-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
