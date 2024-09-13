import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WellnessIcon({ iconName = 'wellness', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
