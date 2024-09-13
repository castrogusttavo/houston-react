import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TeaPodIcon({ iconName = 'tea-pod', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
