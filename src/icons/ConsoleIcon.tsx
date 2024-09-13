import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ConsoleIcon({ iconName = 'console', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
