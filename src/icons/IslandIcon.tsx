import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IslandIcon({ iconName = 'island', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
