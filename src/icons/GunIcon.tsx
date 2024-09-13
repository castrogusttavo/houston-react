import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GunIcon({ iconName = 'gun', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
