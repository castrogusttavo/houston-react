import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EditTableIconIcon({ iconName = 'edit-table-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
