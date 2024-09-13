import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FunctionIcon({ iconName = 'function', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
