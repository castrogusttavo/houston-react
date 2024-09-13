import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ViewIcon({ iconName = 'view', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
