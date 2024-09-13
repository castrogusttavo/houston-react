import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeskIcon({ iconName = 'desk', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
