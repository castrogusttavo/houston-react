import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GasPipeIcon({ iconName = 'gas-pipe', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
