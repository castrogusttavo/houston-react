import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Compass01Icon({
  iconName = 'compass-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
