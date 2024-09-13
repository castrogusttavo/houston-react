import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SleepingIcon({ iconName = 'sleeping', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
