import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ScratchCardIcon({ iconName = 'scratch-card-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
