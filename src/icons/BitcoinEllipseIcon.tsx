import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinEllipseIcon({
  iconName = 'bitcoin-ellipse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
