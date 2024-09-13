import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CommandIcon({ iconName = 'command', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
