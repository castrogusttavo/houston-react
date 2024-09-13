import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RowInsertIcon({
  iconName = 'row-insert',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
