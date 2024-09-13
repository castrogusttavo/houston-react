import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FilterVerticalIcon({
  iconName = 'filter-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
