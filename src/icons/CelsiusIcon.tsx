import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CelsiusIcon({ iconName = 'celsius', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
