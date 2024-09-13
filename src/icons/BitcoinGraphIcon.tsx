import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinGraphIcon({
  iconName = 'bitcoin-graph',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
