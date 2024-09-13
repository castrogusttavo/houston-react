import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EthereumEllipseIcon({
  iconName = 'ethereum-ellipse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
