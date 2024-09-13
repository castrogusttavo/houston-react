import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LampIcon({ iconName = 'lamp', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
