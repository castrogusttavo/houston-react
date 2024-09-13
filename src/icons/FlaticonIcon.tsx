import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlaticonIcon({ iconName = 'flaticon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
