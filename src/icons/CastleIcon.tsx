import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CastleIcon({ iconName = 'castle', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
