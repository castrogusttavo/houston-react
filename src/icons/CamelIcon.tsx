import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CamelIcon({ iconName = 'camel', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
