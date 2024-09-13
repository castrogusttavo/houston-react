import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RemovePiIcon({ iconName = 'remove-pi', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
