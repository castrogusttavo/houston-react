import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JarIcon({ iconName = 'jar', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
