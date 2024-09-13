import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PoolIcon({ iconName = 'pool', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
