import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlipLeftIcon({ iconName = 'flip-left', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
