import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TradeDownIcon({ iconName = 'trade-down-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
