import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StarHalfIcon({ iconName = 'star-half', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
