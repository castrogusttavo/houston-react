import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HalalIcon({ iconName = 'halal', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
