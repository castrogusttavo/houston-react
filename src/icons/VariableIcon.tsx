import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VariableIcon({ iconName = 'variable', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
