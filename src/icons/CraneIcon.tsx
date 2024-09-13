import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CraneIcon({ iconName = 'crane', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
