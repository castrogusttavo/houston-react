import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FireIcon({ iconName = 'fire', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
