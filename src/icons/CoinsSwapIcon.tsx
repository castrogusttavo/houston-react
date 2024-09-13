import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CoinsSwapIcon({
  iconName = 'coins-swap',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
