import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NerdIcon({ iconName = 'nerd', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
