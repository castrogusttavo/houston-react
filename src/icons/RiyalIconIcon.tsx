import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RiyalIconIcon({ iconName = 'riyal-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
