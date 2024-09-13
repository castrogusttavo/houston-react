import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GolfBatIcon({ iconName = 'golf-bat', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
