import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FilterEditIcon({
  iconName = 'filter-edit',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
