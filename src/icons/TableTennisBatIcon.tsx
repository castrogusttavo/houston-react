import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TableTennisBatIcon({
  iconName = 'table-tennis-bat',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
