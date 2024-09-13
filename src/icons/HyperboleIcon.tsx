import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HyperboleIcon({ iconName = 'hyperbole', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
