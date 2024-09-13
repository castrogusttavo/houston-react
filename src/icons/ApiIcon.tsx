import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ApiIcon({ iconName = 'api', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
