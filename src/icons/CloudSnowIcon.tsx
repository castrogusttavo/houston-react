import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudSnowIcon({
  iconName = 'cloud-snow',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
