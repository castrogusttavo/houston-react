import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudFastWindIcon({
  iconName = 'cloud-fast-wind',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
