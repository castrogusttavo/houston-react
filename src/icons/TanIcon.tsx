import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TanIcon({ iconName = 'tan', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
