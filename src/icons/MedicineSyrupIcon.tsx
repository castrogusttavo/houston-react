import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MedicineSyrupIcon({
  iconName = 'medicine-syrup',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
