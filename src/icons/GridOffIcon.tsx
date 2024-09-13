import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GridOffIcon({ iconName = 'grid-off', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
