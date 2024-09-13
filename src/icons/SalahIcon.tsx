import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SalahIcon({ iconName = 'salah', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
