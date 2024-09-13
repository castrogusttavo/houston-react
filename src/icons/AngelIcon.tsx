import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AngelIcon({ iconName = 'angel', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
