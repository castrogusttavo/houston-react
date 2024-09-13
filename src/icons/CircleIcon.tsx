import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleIcon({ iconName = 'circle', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
