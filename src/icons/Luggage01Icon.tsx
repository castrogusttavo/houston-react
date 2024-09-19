import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Luggage01Icon({
  iconName = 'luggage-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
