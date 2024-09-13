import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TrapezoidLineVerticalIcon({
  iconName = 'trapezoid-line-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
