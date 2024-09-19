import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InsertColumnIcon({ iconName = 'insert-column-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
