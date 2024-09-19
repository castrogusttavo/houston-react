import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DarkModeIcon({ iconName = 'dark-mode-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
