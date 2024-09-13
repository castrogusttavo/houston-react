import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RightToLeftListTriangleIcon({
  iconName = 'right-to-left-list-triangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
