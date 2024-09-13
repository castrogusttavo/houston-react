import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlaneIcon({ iconName = 'plane', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
