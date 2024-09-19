import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeTopIcon({
  iconName = 'stroke-top',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
