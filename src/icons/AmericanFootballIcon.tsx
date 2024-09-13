import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AmericanFootballIcon({
  iconName = 'american-football',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
