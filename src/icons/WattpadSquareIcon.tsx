import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WattpadSquareIcon({
  iconName = 'wattpad-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
