import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BeltIcon({ iconName = 'belt', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
