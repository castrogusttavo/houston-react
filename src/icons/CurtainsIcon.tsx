import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CurtainsIcon({ iconName = 'curtains', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
