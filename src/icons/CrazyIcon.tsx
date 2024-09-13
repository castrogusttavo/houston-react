import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CrazyIcon({ iconName = 'crazy', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
