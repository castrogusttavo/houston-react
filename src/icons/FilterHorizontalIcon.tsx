import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FilterHorizontalIcon({
  iconName = 'filter-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
