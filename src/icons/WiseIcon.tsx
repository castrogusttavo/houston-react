import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WiseIcon({ iconName = 'wise', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
