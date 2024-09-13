import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UnhappyIcon({ iconName = 'unhappy', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
