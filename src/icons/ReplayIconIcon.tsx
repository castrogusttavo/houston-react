import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ReplayIconIcon({ iconName = 'replay-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
