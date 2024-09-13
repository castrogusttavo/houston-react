import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudLittleSnowIcon({
  iconName = 'cloud-little-snow',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
