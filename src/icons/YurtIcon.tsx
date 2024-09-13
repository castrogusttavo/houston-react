import React from 'react'
import { Icon, IconProps } from '../Icon'

export function YurtIcon({ iconName = 'yurt', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
