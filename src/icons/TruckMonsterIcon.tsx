import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TruckMonsterIcon({
  iconName = 'truck-monster',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
