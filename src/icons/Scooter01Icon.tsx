import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Scooter01Icon({
  iconName = 'scooter-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
