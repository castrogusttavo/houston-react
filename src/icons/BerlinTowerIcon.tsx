import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BerlinTowerIcon({
  iconName = 'berlin-tower',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
