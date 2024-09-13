import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoldIcon({ iconName = 'gold', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
