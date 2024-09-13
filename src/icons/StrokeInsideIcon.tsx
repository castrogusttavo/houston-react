import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeInsideIcon({
  iconName = 'stroke-inside',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
