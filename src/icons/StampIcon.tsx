import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StampIcon({ iconName = 'stamp', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
