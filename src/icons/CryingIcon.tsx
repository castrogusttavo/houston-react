import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CryingIcon({ iconName = 'crying', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
