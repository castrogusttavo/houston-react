import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HddIcon({ iconName = 'hdd', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
