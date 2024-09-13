import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RightTriangleIcon({
  iconName = 'right-triangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
