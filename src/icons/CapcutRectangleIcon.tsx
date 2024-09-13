import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CapcutRectangleIcon({
  iconName = 'capcut-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
