import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpatulaIcon({ iconName = 'spatula', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
