import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LanternIcon({ iconName = 'lantern', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
