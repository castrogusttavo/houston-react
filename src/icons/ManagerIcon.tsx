import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ManagerIcon({ iconName = 'manager', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
