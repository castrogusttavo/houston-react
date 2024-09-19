import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MountainIcon({ iconName = 'mountain', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
