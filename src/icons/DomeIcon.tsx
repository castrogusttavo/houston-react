import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DomeIcon({ iconName = 'dome', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
