import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DarkModeIcon({ iconName = 'dark-mode', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
