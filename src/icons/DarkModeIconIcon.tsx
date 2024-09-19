import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DarkModeIconIcon({ iconName = 'dark-mode-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
