import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreadsRectangleIcon({
  iconName = 'threads-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
