import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonCloudMidSnowIcon({
  iconName = 'moon-cloud-mid-snow',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
