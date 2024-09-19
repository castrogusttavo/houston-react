import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeleteRowIconIcon({ iconName = 'delete-row-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
