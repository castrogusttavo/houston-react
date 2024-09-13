import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinSquareIcon({
  iconName = 'bitcoin-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
