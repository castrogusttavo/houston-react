import React from 'react'
import { Icon, IconProps } from '../Icon'

export function YogaBallIcon({ iconName = 'yoga-ball', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
