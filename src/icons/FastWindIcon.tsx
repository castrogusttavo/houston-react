import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FastWindIcon({ iconName = 'fast-wind', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
