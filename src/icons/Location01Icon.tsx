import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Location01Icon({
  iconName = 'location-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
