import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KetupatIcon({ iconName = 'ketupat', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
