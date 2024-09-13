import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AtIcon({ iconName = 'at', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
