import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EvilIcon({ iconName = 'evil', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
