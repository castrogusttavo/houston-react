import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DirhamIconIcon({ iconName = 'dirham-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
