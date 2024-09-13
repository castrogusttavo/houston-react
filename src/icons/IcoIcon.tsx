import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IcoIcon({ iconName = 'ico', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
