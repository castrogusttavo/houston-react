import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Triangle03Icon({
  iconName = 'triangle-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
