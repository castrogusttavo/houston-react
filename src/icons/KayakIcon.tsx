import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KayakIcon({ iconName = 'kayak', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
