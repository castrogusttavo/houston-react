import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TeaIcon({ iconName = 'tea', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
