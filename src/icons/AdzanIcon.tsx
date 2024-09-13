import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AdzanIcon({ iconName = 'adzan', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
