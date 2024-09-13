import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PisaTowerIcon({
  iconName = 'pisa-tower',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
