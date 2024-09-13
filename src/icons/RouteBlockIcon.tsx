import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RouteBlockIcon({
  iconName = 'route-block',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
