import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BridgeIcon({ iconName = 'bridge', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
