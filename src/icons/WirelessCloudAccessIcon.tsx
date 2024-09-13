import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WirelessCloudAccessIcon({
  iconName = 'wireless-cloud-access',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
