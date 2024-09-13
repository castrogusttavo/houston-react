import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PulleyIcon({ iconName = 'pulley', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
