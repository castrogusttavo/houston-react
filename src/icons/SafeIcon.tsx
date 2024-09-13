import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SafeIcon({ iconName = 'safe', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
