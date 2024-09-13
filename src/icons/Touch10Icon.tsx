import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Touch10Icon({ iconName = 'touch-10', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
