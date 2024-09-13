import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DropletIcon({ iconName = 'droplet', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
