import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AdventureIcon({ iconName = 'adventure', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
