import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AdvertisimentIcon({
  iconName = 'advertisiment',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
