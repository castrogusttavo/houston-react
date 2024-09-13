import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SecurityIcon({ iconName = 'security', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
