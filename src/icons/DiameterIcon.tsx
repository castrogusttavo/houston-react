import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiameterIcon({ iconName = 'diameter', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
