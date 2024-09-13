import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HealthIcon({ iconName = 'health', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
