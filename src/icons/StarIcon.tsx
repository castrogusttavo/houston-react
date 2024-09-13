import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StarIcon({ iconName = 'star', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
