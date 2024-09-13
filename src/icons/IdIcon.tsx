import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IdIcon({ iconName = 'id', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
