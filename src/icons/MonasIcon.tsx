import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MonasIcon({ iconName = 'monas', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
