import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CellularNetworkIcon({
  iconName = 'cellular-network',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
