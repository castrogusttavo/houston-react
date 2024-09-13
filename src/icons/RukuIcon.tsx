import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RukuIcon({ iconName = 'ruku', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
