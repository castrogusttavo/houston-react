import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EarIcon({ iconName = 'ear', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
