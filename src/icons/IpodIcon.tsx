import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IpodIcon({ iconName = 'ipod', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
