import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ToggleOnIcon({ iconName = 'toggle-on', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
