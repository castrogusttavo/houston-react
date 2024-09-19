import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ReplayIcon({ iconName = 'replay', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
