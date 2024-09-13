import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallIcon({ iconName = 'call', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
