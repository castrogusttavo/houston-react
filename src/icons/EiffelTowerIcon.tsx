import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EiffelTowerIcon({
  iconName = 'eiffel-tower',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
