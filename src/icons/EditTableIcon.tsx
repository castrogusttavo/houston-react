import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EditTableIcon({ iconName = 'edit-table-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
