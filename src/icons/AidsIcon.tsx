import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AidsIcon({ iconName = 'aids', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
