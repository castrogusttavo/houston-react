import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RiyalIcon({ iconName = 'riyal-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
