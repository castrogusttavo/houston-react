import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MehIcon({ iconName = 'meh', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
