import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MountainIconIcon({ iconName = 'mountain-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
