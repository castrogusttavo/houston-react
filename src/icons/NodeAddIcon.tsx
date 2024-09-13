import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NodeAddIcon({ iconName = 'node-add', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
