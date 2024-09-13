import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FilterIcon({ iconName = 'filter', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
