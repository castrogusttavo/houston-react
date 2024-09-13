import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ClipboardIcon({ iconName = 'clipboard', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
