import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RotateLeft01Icon({
  iconName = 'rotate-left-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
