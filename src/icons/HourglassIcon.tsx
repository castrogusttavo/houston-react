import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HourglassIcon({ iconName = 'hourglass', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
