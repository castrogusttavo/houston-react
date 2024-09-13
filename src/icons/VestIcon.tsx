import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VestIcon({ iconName = 'vest', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
