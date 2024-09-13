import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CargoShipIcon({
  iconName = 'cargo-ship',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
