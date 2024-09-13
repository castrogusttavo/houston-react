import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EnteringGeoFenceIcon({
  iconName = 'entering-geo-fence',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
