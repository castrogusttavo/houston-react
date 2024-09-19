import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WaitersIconIcon({ iconName = 'waiters-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
