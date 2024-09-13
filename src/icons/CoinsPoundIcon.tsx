import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CoinsPoundIcon({
  iconName = 'coins-pound',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
