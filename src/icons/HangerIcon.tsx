import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HangerIcon({ iconName = 'hanger', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
