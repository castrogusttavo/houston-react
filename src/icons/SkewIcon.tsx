import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SkewIcon({ iconName = 'skew', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
