import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudLoadingIcon({
  iconName = 'cloud-loading',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
