import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DropperIcon({ iconName = 'dropper', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
