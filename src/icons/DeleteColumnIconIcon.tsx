import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeleteColumnIconIcon({ iconName = 'delete-column-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
