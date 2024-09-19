import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IndexIcon({ iconName = 'index', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
