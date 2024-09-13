import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpermIcon({ iconName = 'sperm', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
