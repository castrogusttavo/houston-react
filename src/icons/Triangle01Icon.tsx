import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Triangle01Icon({
  iconName = 'triangle-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
