import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BlockedIconIcon({ iconName = 'blocked-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
