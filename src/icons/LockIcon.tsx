import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LockIcon({ iconName = 'lock', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
