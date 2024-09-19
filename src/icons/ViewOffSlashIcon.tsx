import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ViewOffSlashIcon({ iconName = 'view-off-slash-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
