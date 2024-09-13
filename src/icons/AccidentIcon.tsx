import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AccidentIcon({ iconName = 'accident', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
