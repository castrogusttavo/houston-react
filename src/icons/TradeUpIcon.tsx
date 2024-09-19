import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TradeUpIcon({ iconName = 'trade-up-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
