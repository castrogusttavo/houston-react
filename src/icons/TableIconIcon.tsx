import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TableIconIcon({ iconName = 'table-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
