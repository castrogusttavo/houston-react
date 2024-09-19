import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HackerrankIconIcon({ iconName = 'hackerrank-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
