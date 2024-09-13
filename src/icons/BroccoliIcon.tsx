import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BroccoliIcon({ iconName = 'broccoli', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
