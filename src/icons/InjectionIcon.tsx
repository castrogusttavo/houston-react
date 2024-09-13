import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InjectionIcon({ iconName = 'injection', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
