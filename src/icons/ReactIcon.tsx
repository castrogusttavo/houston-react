import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ReactIcon({ iconName = 'react', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
