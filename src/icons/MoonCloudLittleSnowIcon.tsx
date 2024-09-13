import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonCloudLittleSnowIcon({
  iconName = 'moon-cloud-little-snow',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
