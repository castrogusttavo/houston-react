import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FilterMailCircleIcon({
  iconName = 'filter-mail-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
