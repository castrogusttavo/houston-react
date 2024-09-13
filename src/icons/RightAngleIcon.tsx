import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RightAngleIcon({
  iconName = 'right-angle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
