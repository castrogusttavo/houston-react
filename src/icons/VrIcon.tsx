import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VrIcon({ iconName = 'vr', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
