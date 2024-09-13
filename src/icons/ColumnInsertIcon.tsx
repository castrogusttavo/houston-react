import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ColumnInsertIcon({
  iconName = 'column-insert',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
