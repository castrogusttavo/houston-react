import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InsertRowIcon({
  iconName = 'insert-row',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
