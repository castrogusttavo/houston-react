import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AvalancheIcon({ iconName = 'avalanche', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
