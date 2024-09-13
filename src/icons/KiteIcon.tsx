import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KiteIcon({ iconName = 'kite', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
