import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BulbChargingIcon({
  iconName = 'bulb-charging',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
