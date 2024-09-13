import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChairBarberIcon({
  iconName = 'chair-barber',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
