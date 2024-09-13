import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TongueWinkLeftIcon({
  iconName = 'tongue-wink-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
