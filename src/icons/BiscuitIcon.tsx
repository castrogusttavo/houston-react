import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BiscuitIcon({ iconName = 'biscuit', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
