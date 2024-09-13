import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LocationCheck01Icon({
  iconName = 'location-check-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
