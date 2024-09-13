import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LeftToRightListTriangleIcon({
  iconName = 'left-to-right-list-triangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
