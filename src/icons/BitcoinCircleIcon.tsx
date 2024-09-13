import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinCircleIcon({
  iconName = 'bitcoin-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
