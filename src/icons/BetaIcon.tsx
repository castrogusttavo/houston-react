import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BetaIcon({ iconName = 'beta', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
