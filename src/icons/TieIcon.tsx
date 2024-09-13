import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TieIcon({ iconName = 'tie', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
