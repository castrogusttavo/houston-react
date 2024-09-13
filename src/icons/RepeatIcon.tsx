import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RepeatIcon({ iconName = 'repeat', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
