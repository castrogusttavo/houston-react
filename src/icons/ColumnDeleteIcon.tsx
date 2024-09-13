import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ColumnDeleteIcon({
  iconName = 'column-delete',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
