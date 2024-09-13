import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JupiterIcon({ iconName = 'jupiter', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
