import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TwitterIcon({ iconName = 'twitter', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
