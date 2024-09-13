import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ObtuseIcon({ iconName = 'obtuse', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
