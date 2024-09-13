import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ConfusedIcon({ iconName = 'confused', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
