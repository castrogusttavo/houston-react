import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiggIcon({ iconName = 'digg', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
