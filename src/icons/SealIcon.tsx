import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SealIcon({ iconName = 'seal', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
