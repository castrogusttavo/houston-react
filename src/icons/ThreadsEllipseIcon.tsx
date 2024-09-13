import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreadsEllipseIcon({
  iconName = 'threads-ellipse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
