import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DuaIcon({ iconName = 'dua', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
