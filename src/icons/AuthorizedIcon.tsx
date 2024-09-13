import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AuthorizedIcon({
  iconName = 'authorized',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
