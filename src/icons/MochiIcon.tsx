import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MochiIcon({ iconName = 'mochi', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
