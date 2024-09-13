import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InLoveIcon({ iconName = 'in-love', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
