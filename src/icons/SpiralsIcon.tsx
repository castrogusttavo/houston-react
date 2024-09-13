import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpiralsIcon({ iconName = 'spirals', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
