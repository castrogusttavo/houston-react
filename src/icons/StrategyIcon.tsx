import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrategyIcon({ iconName = 'strategy', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
