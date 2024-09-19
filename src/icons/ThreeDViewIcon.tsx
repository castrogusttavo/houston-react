import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreeDViewIcon({ iconName = 'three-d-view-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
