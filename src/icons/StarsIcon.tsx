import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StarsIcon({ iconName = 'stars', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
