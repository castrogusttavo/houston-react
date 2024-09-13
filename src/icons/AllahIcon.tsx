import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AllahIcon({ iconName = 'allah', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
