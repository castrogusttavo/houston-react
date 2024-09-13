import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BrainIcon({ iconName = 'brain', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
