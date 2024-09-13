import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IdNotVerifiedIcon({
  iconName = 'id-not-verified',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
