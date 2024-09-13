import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InsertPiIcon({ iconName = 'insert-pi', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
