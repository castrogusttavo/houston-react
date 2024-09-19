import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RepairIconIcon({ iconName = 'repair-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
