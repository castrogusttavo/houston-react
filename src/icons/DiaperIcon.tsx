import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiaperIcon({ iconName = 'diaper', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
