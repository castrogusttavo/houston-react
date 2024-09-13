import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PeriscopeIcon({ iconName = 'periscope', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
