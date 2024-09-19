import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DirhamIcon({ iconName = 'dirham', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
