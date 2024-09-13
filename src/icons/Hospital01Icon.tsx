import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hospital01Icon({
  iconName = 'hospital-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
