import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LeavingGeoFenceIcon({
  iconName = 'leaving-geo-fence',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
