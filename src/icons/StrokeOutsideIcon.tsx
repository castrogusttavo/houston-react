import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeOutsideIcon({
  iconName = 'stroke-outside',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
