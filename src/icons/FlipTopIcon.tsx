import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlipTopIcon({ iconName = 'flip-top', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
