import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RowDeleteIcon({
  iconName = 'row-delete',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
