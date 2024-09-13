import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ConnectIcon({ iconName = 'connect', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
