import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BlockedIcon({ iconName = 'blocked-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
