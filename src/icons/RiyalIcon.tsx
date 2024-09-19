import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RiyalIcon({ iconName = 'riyal', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
