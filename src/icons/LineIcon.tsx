import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LineIcon({ iconName = 'line', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
