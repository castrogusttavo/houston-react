import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TradeDownIcon({
  iconName = 'trade-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
