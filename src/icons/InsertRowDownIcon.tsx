import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InsertRowDownIcon({
  iconName = 'insert-row-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
