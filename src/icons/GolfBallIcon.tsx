import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GolfBallIcon({ iconName = 'golf-ball', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
