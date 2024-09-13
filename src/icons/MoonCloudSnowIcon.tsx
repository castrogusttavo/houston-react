import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonCloudSnowIcon({
  iconName = 'moon-cloud-snow',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
