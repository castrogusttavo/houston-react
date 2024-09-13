import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StopIcon({ iconName = 'stop', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
