import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ScratchCardIconIcon({ iconName = 'scratch-card-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
