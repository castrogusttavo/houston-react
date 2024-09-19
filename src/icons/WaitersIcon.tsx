import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WaitersIcon({ iconName = 'waiters-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
