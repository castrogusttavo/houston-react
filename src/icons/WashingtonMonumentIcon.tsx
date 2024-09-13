import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WashingtonMonumentIcon({
  iconName = 'washington-monument',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
