import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SwarmIcon({ iconName = 'swarm', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
