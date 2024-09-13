import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FilterAddIcon({
  iconName = 'filter-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
