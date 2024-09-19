import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CleanIcon({ iconName = 'clean', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
