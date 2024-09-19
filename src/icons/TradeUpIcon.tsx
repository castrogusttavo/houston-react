import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TradeUpIcon({ iconName = 'trade-up', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
