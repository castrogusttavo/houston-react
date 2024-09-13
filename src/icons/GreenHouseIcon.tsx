import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GreenHouseIcon({
  iconName = 'green-house',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
