import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TrapezoidLineHorizontalIcon({
  iconName = 'trapezoid-line-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
