import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CleanIcon({ iconName = 'clean-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
