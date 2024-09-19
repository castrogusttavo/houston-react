import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeleteRowIcon({ iconName = 'delete-row-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
