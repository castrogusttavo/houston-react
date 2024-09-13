import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RotateClockwiseIcon({
  iconName = 'rotate-clockwise',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
