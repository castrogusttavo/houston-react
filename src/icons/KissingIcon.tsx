import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KissingIcon({ iconName = 'kissing', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
