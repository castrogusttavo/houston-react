import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GymnasticIcon({ iconName = 'gymnastic', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
