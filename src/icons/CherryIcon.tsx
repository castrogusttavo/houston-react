import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CherryIcon({ iconName = 'cherry', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
