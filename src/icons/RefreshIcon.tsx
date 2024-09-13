import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RefreshIcon({ iconName = 'refresh', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
