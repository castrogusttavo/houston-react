import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StakeIcon({ iconName = 'stake', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
