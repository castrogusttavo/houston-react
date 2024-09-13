import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NoInternetIcon({
  iconName = 'no-internet',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
