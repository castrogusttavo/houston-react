import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AuctionIcon({ iconName = 'auction', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
