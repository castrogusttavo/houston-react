import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CrabIcon({ iconName = 'crab', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
