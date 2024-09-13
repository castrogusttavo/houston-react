import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bitcoin03Icon({
  iconName = 'bitcoin-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
