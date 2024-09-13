import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FilterResetIcon({
  iconName = 'filter-reset',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
