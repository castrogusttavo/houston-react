import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BaseballIcon({ iconName = 'baseball', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
